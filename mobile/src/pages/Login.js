import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import logo from '../assets/logo.png'

import api from '../services/api'

export default function Login({ navigation }){

    const [user, setUser] = useState('');

    function handleLogin(){
        


    navigation.navigate('Main');
    }

    return (
        <KeyboardAvoidingView 
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.container}
        >
            <Image source={logo} />

            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuario no Github"
            placeholderTextColor="#999"
            style={styles.input}
            value={user}
            onChangeText={setUser} />

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>


            </TouchableOpacity>

            


        </KeyboardAvoidingView>
    
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent:'center',
        alignItems:'center',
        padding: 30  
        
    },

    input: {
        height: 46,
        alignSelf:'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 15,

    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'




    },

    buttonText: {
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 16,
    },


})

