import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

export default function Header()
{
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>
                My Todos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        justifyContent: 'center',
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});