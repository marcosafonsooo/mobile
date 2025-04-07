import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native"

export default function RootLayout() {
    
  return( 
    <>
    <StatusBar style="light"/>
  <Stack
      screenOptions={{
      headerStyle:{backgroundColor: '#ffe7fa',},
      headerShadowVisible: false,
      headerTintColor:'#49093e',
    }}
  
  >

    <Stack.Screen name = "(tabs)" options={{ headerShown: false}}/>
    <Stack.Screen name = "+not-found" options={{}}/>
    </Stack>
    </>
    );

}