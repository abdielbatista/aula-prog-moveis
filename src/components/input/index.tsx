import React, { forwardRef, Fragment } from "react";

import {Text, View, TextInput, TextInputProps} from 'react-native';
import { themas } from "../../global/themes";
import { style } from "./styles";

import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;   

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    icontRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef(()=>{
    return(
        <Fragment>
            
            <Text style={style.titleInput}></Text>

            <View style={style.BoxInput}>

                <TextInput style={style.Input}></TextInput>

                <MaterialIcons name="email" size={20} color={themas.Colors.gray}></MaterialIcons>
            
            </View>

        </Fragment>    
             
    )
})