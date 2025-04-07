import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

export default function Index() {
  return (
    <View style={afns.container}>
      <View style={afns.imageContainer}>
        <ImageViewer imgSource={require("../../assets/images/afns.png")} />
      </View>
      <Text style = {afns.text}>O AFNS Art Gallery é o aplicativo perfeito para os amantes da arte urbana! Com ele, você pode explorar murais e grafites incríveis ao redor do mundo, descobrir a história por trás de cada obra e até aprender a criar suas próprias artes. Além de um mapa interativo que mostra as melhores pinturas de rua da sua cidade, o app oferece aulas exclusivas sobre técnicas de graffiti, stencil e outros estilos. Seja você um artista iniciante ou apenas um admirador, o AFNS Art Gallery conecta você ao vibrante universo da arte de rua! 🎨✨ </Text>
      <View style={afns.footerContainer}>
        <Button label="Clique aqui!"></Button>
      </View>
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
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
  },
});