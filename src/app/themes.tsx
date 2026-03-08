import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
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
        
      
        <View className="flex-row justify-between mt-4 border-t border-slate-100 pt-2">
          <View>
            <Text className="text-xs text-slate-400">Obras Ativas</Text>
            <Text className="font-bold">4</Text>
          </View>
          <View>
            <Text className="text-xs text-slate-400">Investido Total</Text>
            <Text className="font-bold text-green-600">R$ 850.000</Text>
          </View>
        </View>
      </View>

      <Text className="font-bold mb-4">O que você deseja acessar?</Text>

      {/* Grade de Botões (Cards) */}
      <View className="flex-row flex-wrap justify-between">
        <MenuCard icon="city" title="Ver Obras" />
        <MenuCard icon="donate" title="Investimentos" />
        <MenuCard icon="chart-bar" title="Dashboard" />
        <MenuCard icon="file-invoice-dollar" title="Despesas" />
      </View>
    </ScrollView>
  );
}

// Sub-componente para os cards
function MenuCard({ icon, title }: { icon: string, title: string }) {
  return (
    <Pressable className="w-[48%] bg-white border border-slate-200 p-4 rounded-xl items-center mb-4 shadow-sm">
      <FontAwesome5 name={icon} size={24} color="#6B8DF2" />
      <Text className="mt-2 font-semibold text-slate-700">{title}</Text>
    </Pressable>
  );
} 
