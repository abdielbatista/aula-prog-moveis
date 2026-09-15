import React, { forwardRef, Fragment, LegacyRef } from "react";

import {Text, View, TextInput, TextInputProps, TouchableOpacity} from 'react-native';
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

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{

    const {IconLeft, IconRight, iconLeftName, icontRightName, title, onIconLeftPress, onIconRightPress, ...rest} = Props

    return(
        <Fragment>
            
            <Text style={style.titleInput}>{title}</Text>

            <View style={style.BoxInput}>

                {IconLeft && iconLeftName &&(
                    <TouchableOpacity onPress={onIconLeftPress}>
                        <IconLeft name={iconLeftName as any} color={themas.Colors.gray} style={style.icon}/>
                    </TouchableOpacity>
                )}

                <TextInput style={style.Input} {...rest}></TextInput>

                {IconRight && icontRightName && (
                    <TouchableOpacity onPress={onIconRightPress}>
                        <IconRight name={icontRightName as any} size={20} color={themas.Colors.gray} style={style.icon}/>
                    </TouchableOpacity>
                )}
            
            </View>

        </Fragment>    
             
    )
})