import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";


export default function theme(){



  return (
    <ScrollView className="flex-1 bg-slate-50 px-5 pt-10">
      <Text className="text-3xl font-bold text-slate-800">ObraTracker</Text>
      <Text className="text-slate-500 mb-6">Gestão inteligente de obras</Text>

      <View className="bg-white p-4 rounded-xl border border-slate-200 mb-6">
        <Text className="font-bold text-lg mb-2">Olá, Usuário,</Text>
        <Text className="text-slate-600">Aqui está o resumo geral:</Text>
      </View>

       <View className="bg-white p-4 rounded-xl border-slate-200 mb-6">
            <Text>Obras ativas: 4</Text>
            <Text>Investido total: 800.000</Text>
      </View>

      <View className="bg-white p-4 rounded-xl border-slate-200 mb-6 items-center">
            <Text>Ver obras</Text>
      </View>


      <View className="bg-white p-4 rounded-xl border-slate-200 mb-6 items-center">
            <Text>Investimento</Text>
      </View>
      
      <View className="bg-white p-4 rounded-xl border-slate-200 mb-6 items-center">
            <Text>Despesas</Text>
      </View>

      <View className="flex flex-row gap-4= justify-center items-center">
      <Pressable>
        <Ionicons name="home-outline" size={40}></Ionicons>
      </Pressable>  
      <Pressable className="" >
        <Ionicons name="add-circle-outline" size={40}></Ionicons>
      </Pressable>
      <Pressable className="" >
       <Ionicons name="person-circle-outline" size={40}></Ionicons>
      </Pressable>
      </View>

    </ScrollView>
  );
}

