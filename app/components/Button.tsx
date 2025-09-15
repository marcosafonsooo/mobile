import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

type Props = {
  label: string;
  theme?: 'primary',
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
      return (
        <View
          style={[
            styles.buttonContainer,
            { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
          ]}
        >
          <Pressable
            style={[styles.button, { backgroundColor: '#49093e' }]}
            onPress={onPress}
          >
            <FontAwesome name="picture-o" size={18} color="#ffe7fa" style={styles.buttonIcon} />
            <Text style={[styles.buttonLabel, { color: '#ffe7fa' }]}>{label}</Text>
          </Pressable>
        </View>
      );
    }
    return(
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 100,
        borderColor: '#ffe7fa',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffe7fa',
        borderColor: '#ffe7fa',
    },
    buttonLabel: {
        color: '#49093e',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    },
});
