import React, { useState } from "react";

// npx expo start --tunnel

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";


export default function Login(){
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(true)
    const [loading,setLoading] = useState(false);

    async function getLogin(){
        try{
            setLoading(true)
            
            if(!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios')
            }

            //console.log('Logado com sucesso')

            setTimeout(()=>{
                if(email == "abdielb@yahoo.com" && password == '12345'){
                    Alert.alert('Logado com sucesso')
                }else{
                    Alert.alert('Usuario não encontrado')
                }

                setLoading(false) //verificar pq o botão entrar buga quando cai em Atenção','Informe os campos obrigatórios

            },3000)

        } catch (error){
            console.log(error)
        }
    }   

    return(
        <View style={style.container}>

            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo} //chama o style da imagem
                    
                ></Image>

                <Text style={style.text}>Bem Vindo de volta !</Text>

            </View>

           

            <View style={style.boxMid}>

                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRight={MaterialIcons}
                    icontRightName="email"
                ></Input>

                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRight={MaterialIcons}
                    icontRightName="remove-red-eye"
                    secureTextEntry={showPassword}
                    onIconRightPress={()=>setShowPassword(!showPassword)}
                ></Input>

                
            </View>

                <View style={style.boxBottom}>
                    
                    
                    <Button>
                        
                    </Button>
                    
                </View>

        <Text style={style.textBottom}>Não tem conta ? <Text style={{color:themas.Colors.primary}}>Crie agora !</Text> </Text>

        </View>
                    


    )
}
