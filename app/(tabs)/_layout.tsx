import React from "react";
import { Stack, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#49093e",
        headerStyle: {
          backgroundColor: "#ffe7fa",
        },
        headerShadowVisible: false,
        headerTintColor: "#49093e",
        tabBarStyle: {
          backgroundColor: "#ffe7fa",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome6 name="phoenix-framework" size={24} color="#49093e" />
              <Text style={{ color: "#49093e", fontSize: 18 }}>AFNS art gallery.</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre nós",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome6 name="phoenix-framework" size={24} color="#49093e" />
              <Text style={{ color: "#49093e", fontSize: 18 }}>AFNS art gallery.</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "image-frame" : "image-filter-frames"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="toDoList"
        options={{
          title: "Controle de artes / aulas",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome6 name="phoenix-framework" size={24} color="#49093e" />
              <Text style={{ color: "#49093e", fontSize: 18 }}>AFNS art gallery.</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "brush" : "brush-outline"} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="buscaCEP"
        options={{
          title: "Qual a minha localização?",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome6 name="phoenix-framework" size={24} color="#49093e" />
              <Text style={{ color: "#49093e", fontSize: 18 }}>AFNS art gallery.</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "location" : "location-outline"} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="stickerEditor"
        options={{
          title: "Stickers",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome6 name="phoenix-framework" size={24} color="#49093e" />
              <Text style={{ color: "#49093e", fontSize: 18 }}>AFNS art gallery.</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "sticker-emoji" : "sticker-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
