import React from "react"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useFonts, PermanentMarker_400Regular } from "@expo-google-fonts/permanent-marker"
import { RockSalt_400Regular } from "@expo-google-fonts/rock-salt"
import { Text } from "react-native"

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Marker: PermanentMarker_400Regular,
    Rock: RockSalt_400Regular,
  })

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ffe7fa" },
          headerShadowVisible: false,
          headerTintColor: "#49093e",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </>
  )
}
