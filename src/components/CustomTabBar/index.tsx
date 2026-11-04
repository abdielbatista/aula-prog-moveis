import React from "react";
import { style } from "./styles"
import { TouchableOpacity, View, Text} from "react-native";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'



export default({state,navigation})=>{
    return(

        <View style={style.tabArea}>

            <TouchableOpacity>
                <Text>esquerda</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>centro</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>direita</Text>
            </TouchableOpacity>


        </View>
     
    )
}