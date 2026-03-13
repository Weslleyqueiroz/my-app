import Constants from 'expo-constants';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { RegisterForm } from '../Screens/form';
import { Screens } from '../Screens/register'

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            className='bg-[#E8EEFF]' 
        >
            <ScrollView showsVerticalScrollIndicator={false}>
          
     
                <View 
                    className='px-4 pb-20' 
                    style={{ marginTop: statusBarHeight + 8 }}
                >
                    <Screens />
                    
                    <View className='mt-4'>
                  
                        <Screens /> 
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}