import React from 'react'
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

export default function TodoItem ( {item, pressHandler} )
{
    return(
        <View>
            <View style = {styles.item}>
                <Text style = {styles.text}>{item.text}</Text>
                <TouchableOpacity onPress = {() => pressHandler(item.key)}>
                    <Image source = {require('../src/assets/images/cross_sign.png')} style = {styles.image}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#4563',
        justifyContent: 'space-between'
    },
    text: {
        justifyContent: 'flex-start'
    },
    image: {
        height: 20,
        width: 20,
    }
})