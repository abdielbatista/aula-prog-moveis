import { StyleSheet } from "react-native";
import { themas } from "../../global/themes"

export const style = StyleSheet.create({
    button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.Colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    textButton:{
        fontSize:20,
        color:themas.Colors.secondary,
        fontWeight:'bold'
    }
})