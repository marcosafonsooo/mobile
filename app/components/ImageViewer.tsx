import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource;
    selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage}: Props) {
    const ImageSource= selectedImage ? { uri: selectedImage } : imgSource;

    return <Image source={ImageSource} style={styles.image}/>;
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '30%',
        justifyContent: "center",
    }
});