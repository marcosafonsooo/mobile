import {View, StyleSheet} from 'react-native'; 
import {Link, Stack} from 'expo-router'; 

export default function NotFoundscreen(){
    return(
        <>
        <Stack.Screen options={{title: 'NÃO TEM NADA AQUI MEU MANO!'}}/>
        <View style={afns.container}>
            <Link href="/" style={afns.button}>Voltar para tela inicial!</Link>
        </View>
</>
    );
}
const afns = StyleSheet.create({
    container: {
      flex: 1,
            backgroundColor: '#A9A9A9',
            justifyContent: "center",
            alignItems: "center",
    },
    button:{
      fontSize: 10,
      textDecorationLine: 'underline',
      color: '#FFD700',
    
    },

});