import { View, StyleSheet, Dimensions, ImageSourcePropType } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';

import ImageViewer from "@/app/components/ImageViewer";
import Button from "@/app/components/Button";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";
import EmojiPicker from "../components/EmojiPicker";
import EmojiList from "../components/EmojiList";

const PlaceholderImage = require('@/assets/images/afns.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedSticker, setPickedSticker] = useState<ImageSourcePropType | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
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
  const handleStickerSelect = (sticker: ImageSourcePropType) => {
    setPickedSticker(sticker);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedSticker && (
          <Image source={pickedSticker} style={styles.sticker} />
        )}
      </View>

      {showAppOptions ? (
        <View style={styles.footerContainer}>
          <CircleButton onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Salvar" onPress={() => alert("Salvar ainda não implementado")} />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolha uma foto!" onPress={pickImage} />
          <Button label="Usar essa foto" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={handleStickerSelect} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    maxWidth: 300,
    aspectRatio: 3 / 4,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  sticker: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
