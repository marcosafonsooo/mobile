import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import ImageViewer from "@/app/components/ImageViewer";
import Button from "@/app/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";

const PlaceholderImage = require('@/assets/images/afns.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

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
}
  return (
    <View style={afns.container}>
      <View style={afns.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      {showAppOptions ? (
        <View />
      ) : (
      <View style={afns.footerContainer}>
        <Button theme="primary" label="Escolha uma foto!" onPress={pickImage}></Button>
        <Button label="Usar essa foto" onPress={() => setShowAppOptions(true)}></Button>
      </View>
      )}
    </View>
  );
}
const afns = StyleSheet.create({
  container: {
    flex: 1,
          backgroundColor: '#ffe7fa',
          justifyContent: "center",
          alignItems: "center",
  },
  text: {
          color: '#49093e',
          paddingInlineStart: 150,
          paddingInlineEnd: 150,
          textAlign: 'center'
  },
  button:{
    fontSize:20,
    textDecorationLine: 'underline',
    color: '#49093e',

  },
  imageContainer: {
    width: 200,
    height: 440,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});