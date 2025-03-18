import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native"

export default function RootLayout() {
    
  return( 
    <>
    <StatusBar style="light"/>
  <Stack
      screenOptions={{
      headerStyle:{backgroundColor: '#A9A9A9',},
      headerShadowVisible: false,
      headerTintColor:'#FFD700',
    }}
  
  >

    <Stack.Screen name = "(tabs)" options={{ headerShown: false}}/>
    <Stack.Screen name = "+not-founf" options={{}}/>
    </Stack>
    </>
    );

}