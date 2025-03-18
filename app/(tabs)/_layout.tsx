import { Stack, Tabs } from "expo-router";
import Ionicons  from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return( 
  <Tabs

    screenOptions={{tabBarActiveTintColor: '#FFD700',//cor do icone do botao

      headerStyle:{
        backgroundColor:'#A9A9A9', //cor do header
      }, 
      
      headerShadowVisible: false, headerTintColor: '#FFD700', //cor do texto do header

      tabBarStyle:{
        backgroundColor: '#A9A9A9' //cor da tab bar - parte de baix onde fica o icone,
      }
  }}
  >

    <Tabs.Screen name = "index" options={{ title: 'AFNS art gallery.', 
      tabBarIcon:({color, focused})=> (
      < Ionicons name={focused ? 'desktop-outline' : 'desktop-outline'} color={color} size ={24}/>)// icone 
    }}
    
    />

    <Tabs.Screen name = "about" options={{ title: 'SOBRE NÓS!', 
      tabBarIcon:({color, focused})=> (
      < Ionicons name={focused ? 'code-outline' : 'code-slash-outline'} color={color} size ={24}/>) //icone
    }}/>




  </Tabs>
    );
}
