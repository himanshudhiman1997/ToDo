import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

export default function Header()
{
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>
                My ToDos
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
});