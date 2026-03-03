    import { Button } from "@react-navigation/elements"
    import {TextInput, Text, View, Pressable, Image} from "react-native"
    import {Ionicons, Feather} from "@expo/vector-icons"
    import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
    import AntDesign from '@expo/vector-icons/AntDesign';
    import { useState } from "react";
    import { GoogleSignin, isSuccessResponse, User } from '@react-native-google-signin/google-signin';


    export function Register (){


        return(

            <View>
                    <Image className="h-48 w-48 items-center mt-20" source={require('../../assets/images/logo.jpg')}></Image>
                    <View className=" h-10 flex-row items-center w-30 bg-slate-300 rounded-full px-4 mt-20">
                    <AntDesign name="google" size={20} color="#6B8DF2"/>
            
        
                <TextInput className=" flex-1 h-full ml-1 p-0 rounded-full" 
                placeholder="Faça login com o google"
                /> 
                </View> 

                <View>
                <View className=" h-10 flex-row items-center w-30 bg-slate-300 rounded-full px-4 mt-20">
                    <FontAwesome5 name="facebook" size={20} color="#6B8DF2"/>
            
        
                <TextInput className=" flex-1 h-full ml-1 p-0 rounded-full" 
                placeholder="Faça login com o facebook"
                /> 
                </View> 
            </View>

            </View>



            






        )
    }
