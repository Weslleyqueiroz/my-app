import { TextInput, Text, View, Pressable, Image } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from "@expo/vector-icons";

import { useEffect, useState } from "react";

    const [usuario,setUsuario] = useState(null)
    const [email,setEmail] = useState(null)
    const [senha,setSenha] = useState(null)


    

export function Register() {

    

    return (    
        <View className=" mt-11  flex-1 items-center px-6 bg-white">
            
            <FontAwesome5 name = "user" size= {40} color ="black"/>
            

             <View className="h-12 flex-row items-center w-full bg-slate-300 rounded-full px-4 mt-4">
                <Ionicons name="logo-google" size={20} color="#6B8DF2"/>
                <Pressable >
                    className="flex-1 h-full ml-2" 
                    placeholder="Fazer Login"
               </Pressable>
            </View>

            <View className="h-12 flex-row items-center w-full bg-slate-300 rounded-full px-4 mt-4">
                <FontAwesome5 name = "lock" size={20} color="#6B8DF2"/>
                <Pressable onPress={email}>
                    className="flex-1 h-full ml-2" 
                    placeholder="Digite o seu e-mail"
                </Pressable> 
            </View> 

        
            <View className="h-12 flex-row items-center w-full bg-slate-300 rounded-full px-4 mt-4">
                <Ionicons name="construct-outline" size={20} color="#6B8DF2"/>
                <Pressable onPress={senha}> 
                    className="flex-1 h-full ml-2" 
                    placeholder="Digite a sua senha"
                </Pressable>
            </View>
           


        </View>
    ); 
} 