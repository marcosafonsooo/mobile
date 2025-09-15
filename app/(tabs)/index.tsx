import { View, StyleSheet, ImageSourcePropType, Platform } from "react-native";
import { useState, useEffect, useRef } from "react";
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from "react-native-view-shot";
import { toJpeg } from 'html-to-image';
import React from "react";
import ImageViewer from "@/app/components/ImageViewer";
import Button from "@/app/components/Button";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";
import EmojiPicker from "../components/EmojiPicker";
import EmojiList from "../components/EmojiList";
import EmojiSticker from "../components/EmojiSticker";

const PlaceholderImage = require('@/assets/images/afns.png');

export default function Index() {
  const imageRef = useRef<View>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedSticker, setPickedSticker] = useState<ImageSourcePropType | null>(null);

  useEffect(() => {
    if (status === null) {
      requestPermission();
    }
  }, [status]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("Você não escolheu nenhuma imagem!");
    }
  };

  const onAddSticker = () => setIsModalVisible(true);
  const onModalClose = () => setIsModalVisible(false);
  const handleStickerSelect = (sticker: ImageSourcePropType) => setPickedSticker(sticker);
  const onReset = () => {
    setPickedSticker(null);
    setSelectedImage(undefined);
    setShowAppOptions(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS === 'web') {
      const domNode = imageRef.current as unknown as HTMLElement;

      if (!domNode) {
        alert("Imagem ainda não carregada.");
        return;
      }

      try {
        const dataUrl = await toJpeg(domNode, {
          quality: 0.95,
          backgroundColor: '#fff', // Garante fundo branco
        });

        const link = document.createElement('a');
        link.download = 'edited-sticker.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.log('Erro ao gerar imagem:', err);
      }

    } else {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        alert('Imagem salva na galeria!');
      } catch (e) {
        console.log('Erro ao salvar no mobile:', e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false} style={{ backgroundColor: '#fff' }}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedSticker && <EmojiSticker imageSize={100} stickerSource={pickedSticker} />}
        </View>
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolha uma foto!" onPress={pickImage} />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={handleStickerSelect} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7fa',
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
});
