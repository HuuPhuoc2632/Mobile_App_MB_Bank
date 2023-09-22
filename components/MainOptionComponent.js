import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'

export default MainOptionComponent = (props) => {
    const {option, onPress} = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img}
            source={require('../assets/send.png')}
            ></Image>
            <Text style={styles.title}>Chuyển tiền</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({ 
    container: {
        borderRadius: 10,
        margin: 10,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,    
    },
    img: {  
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        
    },
})