import { StyleSheet, Platform, StatusBar } from "react-native";


export const colors = {
    color1: '',
    color2: '#8489',
    color3: '#123422',
    color4: '#fff',
    color5: '#888383',
    color6: '',
};

export const defaultStyle = StyleSheet.create({
    padding: 35,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2,
});

export const  inputStyling = StyleSheet.create({
    height: 50,
    backgroundColor: colors.color4,
    marginVertical: 10,
    marginHorizontal: 20,
});

