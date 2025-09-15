import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import React from "react";

type Props = {
  selectedImage?: string;
  imgSource: any;
};

export default function ImageViewer({ selectedImage, imgSource }: Props) {
  const source = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} contentFit="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 400,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#ccc', // só pra caso não carregue a imagem
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
