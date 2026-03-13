import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export function RegisterForm() {
    
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter(); 

    return (   
        <View className="mt-11 flex-1 items-center px-6 bg-white">
            
            <FontAwesome5 name="user" size={60} color="#6B8DF2" />
            
            <Text className="text-2xl font-bold mt-4 text-slate-800">Criar Conta</Text>
            <Text className="text-slate-400 mt-2 mb-10">Preencha os dados abaixo</Text>

        
            <View className="h-16 flex-row items-center w-full bg-slate-50 rounded-2xl px-4 border border-slate-200">
                <Ionicons name="mail-outline" size={20} color="#6B8DF2"/>
                <TextInput
                    className="flex-1 h-full ml-3 text-slate-700" 
                    placeholder="Digite o seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                />
            </View> 

          
            <View className="h-16 flex-row items-center w-full bg-slate-50 rounded-2xl px-4 mt-4 border border-slate-200">
                <Ionicons name="lock-closed-outline" size={20} color="#6B8DF2"/>
                <TextInput 
                    className="flex-1 h-full ml-3 text-slate-700" 
                    placeholder="Digite a sua senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

      
            <Pressable 
                className="h-16 w-full bg-blue-500 rounded-2xl items-center justify-center mt-10 shadow-md"
                onPress={() => console.log("Registrar", { email, senha })}
            >
                <Text className="text-white text-lg font-bold">REGISTRAR</Text>
            </Pressable>
            
            <Pressable className="mt-6" onPress={() => router.back()}>
                <Text className="text-slate-500 text-base">
                    Já tem uma conta? <Text className="text-blue-500 font-bold">Entrar</Text>
                </Text>
            </Pressable>
        </View>
    ); 
}