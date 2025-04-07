import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';

export default function About() {
  return (
    <View style={afns.container}>
    <Text style = {afns.text}>A AFNS Art Gallery é um espaço dedicado a todos que desejam se expressar por meio da arte de rua! Nosso objetivo é conectar artistas e admiradores desse movimento, proporcionando uma plataforma onde a criatividade ganha vida. Aqui, você pode explorar murais incríveis, aprender sobre diferentes técnicas de street art e até desenvolver suas próprias obras. Acreditamos que a arte urbana tem o poder de transformar espaços e contar histórias, e queremos incentivar essa cultura em todo o mundo. Seja bem-vindo à AFNS Art Gallery, onde cada parede pode se tornar uma tela para a sua imaginação! 🎨✨</Text>
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
  fontSize: 20,
  textDecorationLine: 'underline',
  color: '#49093e',

}



});