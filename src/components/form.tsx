import { Button } from "@react-navigation/elements"
import {TextInput, Text, View, Pressable} from "react-native"
import {Ionicons, Feather} from "@expo/vector-icons"


export function Register (){
    return(

        <View className="flex-1 pt-16 px-4 bg-white">
            <View className=" h-12 flex-row items-center w-full bg-slate-300 rounded-full px-4">
                <Ionicons name="search" size={30} color="#6B8DF2"/>
           
     
            <TextInput className=" flex-1 h-full ml-2 p-0 rounded-full" 
             placeholder="Procure uma área..."
             /> 

            </View> 
        </View>






    )
}
