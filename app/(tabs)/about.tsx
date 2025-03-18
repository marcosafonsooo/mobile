import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';

export default function About() {
  return (
    <View style={afns.container}>
    <Text style = {afns.text}>A Galeria de Arte do AFNS é para todos aqueles que querem se expressar através da arte de rua!</Text>
    </View>
  );
}
const afns = StyleSheet.create({
container: {
  flex: 1,
        backgroundColor: '#A9A9A9',
        justifyContent: "center",
        alignItems: "center",
},
text: {
        color: '#FFD700'
},

button:{
  fontSize: 20,
  textDecorationLine: 'underline',
  color: '#FFD700',

}



});