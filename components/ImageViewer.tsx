import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
    return (<Image source={imgSource} style={styles.image} />);
};


const styles = StyleSheet.create({
    image: {
        width: 1000,
        height: 440,
        justifyContent: "center",
    }
});