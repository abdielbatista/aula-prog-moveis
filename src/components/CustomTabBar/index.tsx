import React from "react";
import { style } from "./styles"
import { TouchableOpacity, View, Text} from "react-native";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";



export default({state,navigation})=>{
    return(

        <View style={style.tabArea}>

            <TouchableOpacity style={style.tabItem}>
                <AntDesign
                    name="bars"
                    style={{fontSize:32}}          
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItemButton}>

                <View style={{width:'100%', left:10,top:4}}>
                    <Entypo
                        name="plus"
                        size={40}
                        color={"#FFFF"}
                    />
                </View>

                <View style={{flexDirection:'row-reverse',width:'100%',right:10,bottom:10}}>
                    <MaterialIcons
                        name="edit"
                        color={"#FFFF"}
                        size={30}
                    />
                </View>


            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem}>
                <FontAwesome
                    name="user"
                    style={{fontSize:32}}
                />
            </TouchableOpacity>

        </View>
     
    )
}