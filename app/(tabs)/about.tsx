import { Text, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import React from "react";

export default function About() {
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.container, { paddingHorizontal: width * 0.05 }]}>
        <Text style={styles.text}>
          A AFNS Art Gallery é um espaço dedicado a todos que desejam se expressar por meio da arte de rua! Seja bem-vindo à AFNS Art Gallery, onde cada parede pode se tornar uma tela para a sua imaginação! 🎨✨
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#ffe7fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: 600, // limite ideal para texto legível
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: '#49093e',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
