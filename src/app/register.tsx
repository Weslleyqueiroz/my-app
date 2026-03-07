import { Text, View, ScrollView } from 'react-native';
import { Screens } from '../components/header/register';
import { Register } from '../components/form';
import axios from 'axios'

import Constants from 'expo-constants'
import { useEffect, useState } from 'react';


const statusBarHeight = Constants.statusBarHeight


export default function Index() {


    return (

    <ScrollView style = {{flex:1 }} 
    className='bg-slate-200'
    showsVerticalScrollIndicator = {false}>


        <View className='w-full px-4' style = {{marginTop: statusBarHeight +8}}>
            <Screens/>
            
        </View>

        <View className='w-full'>
          <Register/>
        </View>
        
    </ScrollView>
  );

}