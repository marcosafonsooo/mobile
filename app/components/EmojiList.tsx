import React from "react";
import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Pressable, View } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require('@/assets/images/emoji1.png'),
    require('@/assets/images/emoji2.png'),
    require('@/assets/images/emoji3.png'),
    require('@/assets/images/emoji4.png'),
    require('@/assets/images/emoji5.png'),
    require('@/assets/images/emoji6.png'),
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={emoji}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
            style={({ pressed }) => [
              styles.imageWrapper,
              pressed && { transform: [{ scale: 0.95 }], opacity: 0.7 },
            ]}
          >
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe6f4',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  listContainer: {
    gap: 12,
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: '#ffd6ec',
    borderRadius: 16,
    padding: 6,
    marginRight: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
});
