import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login.js'
import Home from './Home.js'
import Product from './Product.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}} >
            <Tab.Screen name="Trang chủ" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <Image source={focused
                        ? require('../assets/HomeBlue.png')
                        : require('../assets/homeGray.png')} style= {{width: 24, height: 24}}/>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }
        }  />
            <Tab.Screen name="Sản phẩm" component={Product} options={{
                tabBarIcon: ({focused}) => (
                    <Image source={focused
                        ? require('../assets/productBlue.png')
                        : require('../assets/productGray.png')} style= {{width: 24, height: 24}}/>
                ),
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' } 
            }}/>
        </Tab.Navigator>
    );
}
const Stack = createNativeStackNavigator();

export default RootComponent = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={MyTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
