import { View, StyleSheet, ImageSourcePropType } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image } from 'expo-image';

import ImageViewer from "@/app/components/ImageViewer";
import Button from "@/app/components/Button";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";
import EmojiPicker from "../components/EmojiPicker";
import EmojiList from "../components/EmojiList";
import EmojiSticker from "../components/EmojiSticker";

const PlaceholderImage = require('@/assets/images/afns.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedSticker, setPickedSticker] = useState<ImageSourcePropType | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
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
  const onSaveImageAsync = () => alert("Salvar ainda não implementado");

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedSticker && <EmojiSticker imageSize={100} stickerSource={pickedSticker} />}
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
          <Button label="Clique" onPress={() => setShowAppOptions(true)} />
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
