// src/screens/StickerEditor.tsx
import React, { useState, useRef } from "react"
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
} from "react-native"
import { useFonts, PermanentMarker_400Regular } from "@expo-google-fonts/permanent-marker"
import { RockSalt_400Regular } from "@expo-google-fonts/rock-salt"
import { PatrickHand_400Regular } from "@expo-google-fonts/patrick-hand"
import { IndieFlower_400Regular } from "@expo-google-fonts/indie-flower"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import * as MediaLibrary from "expo-media-library"
import { captureRef } from "react-native-view-shot"
import { toJpeg } from "html-to-image"

export default function StickerEditor() {
  const [text, setText] = useState("minha tag")
  const [color, setColor] = useState("#000000")
  const [size, setSize] = useState(40)
  const [font, setFont] = useState("PermanentMarker_400Regular")
  const [status, requestPermission] = MediaLibrary.usePermissions()

  const viewRef = useRef<View>(null)

  const [fontsLoaded] = useFonts({
    PermanentMarker_400Regular,
    RockSalt_400Regular,
    PatrickHand_400Regular,
    IndieFlower_400Regular,
  })

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>
  }

  // salvar como imagem (web e mobile)
  const onSaveImageAsync = async () => {
    if (Platform.OS === "web") {
      const domNode = viewRef.current as unknown as HTMLElement

      if (!domNode) {
        Alert.alert("Erro", "Preview ainda não carregado")
        return
      }

      try {
        const dataUrl = await toJpeg(domNode, {
          quality: 0.95,
          backgroundColor: "#fff",
        })

        const link = document.createElement("a")
        link.download = "sticker-tag.jpeg"
        link.href = dataUrl
        link.click()
      } catch (err) {
        console.log("Erro ao gerar imagem:", err)
      }
    } else {
      try {
        if (!status?.granted) {
          await requestPermission()
        }

        const localUri = await captureRef(viewRef, {
          quality: 1,
          format: "png",
        })

        await MediaLibrary.saveToLibraryAsync(localUri)
        Alert.alert("Sucesso", "Imagem salva na galeria 📸")
      } catch (e) {
        console.log("Erro ao salvar no mobile:", e)
      }
    }
  }

  // resetar
  const onReset = () => {
    setText("minha tag")
    setColor("#000000")
    setSize(40)
    setFont("PermanentMarker_400Regular")
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* preview */}
      <View style={styles.previewContainer}>
        <View ref={viewRef} collapsable={false} style={styles.previewBox}>
          <Text style={{ fontSize: size, color, fontFamily: font }}>{text}</Text>
        </View>
      </View>

      {/* editor */}
      <View style={styles.editorContainer}>
        <TextInput
          placeholder="digite sua tag..."
          value={text}
          onChangeText={setText}
          style={styles.input}
        />

        {/* cores */}
        <View style={styles.colorRow}>
          {["#000", "#e63946", "#457b9d", "#2a9d8f", "#f4a261"].map((c) => (
            <TouchableOpacity
              key={c}
              onPress={() => setColor(c)}
              style={[
                styles.colorCircle,
                { backgroundColor: c, borderWidth: color === c ? 3 : 1 },
              ]}
            />
          ))}
        </View>

        {/* tamanho */}
        <View style={styles.sizeRow}>
          <Button title="-" onPress={() => setSize((prev) => Math.max(20, prev - 5))} />
          <Text style={{ fontSize: 18 }}>Tamanho: {size}</Text>
          <Button title="+" onPress={() => setSize((prev) => prev + 5)} />
        </View>

        {/* fontes */}
        <ScrollView horizontal style={styles.fontRow} showsHorizontalScrollIndicator={false}>
          {[
            { key: "PermanentMarker_400Regular", label: "Marker" },
            { key: "RockSalt_400Regular", label: "Rock Salt" },
            { key: "PatrickHand_400Regular", label: "Patrick Hand" },
            { key: "IndieFlower_400Regular", label: "Indie Flower" },
          ].map((f) => (
            <TouchableOpacity
              key={f.key}
              onPress={() => setFont(f.key)}
              style={[
                styles.fontButton,
                { backgroundColor: font === f.key ? "#49093e" : "#eee" },
              ]}
            >
              <Text style={{ color: font === f.key ? "#fff" : "#333", fontFamily: f.key }}>
                {f.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* botões reset e salvar */}
        <View style={styles.actionsRow}>
          <Button title="Reset" onPress={onReset} />
          <Button title="Salvar" onPress={onSaveImageAsync} />
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe7fa",
  },
  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
  },
  editorContainer: {
    padding: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
  colorRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  colorCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: "#333",
  },
  sizeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  fontRow: {
    marginTop: 15,
  },
  fontButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    borderRadius: 8,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
})
