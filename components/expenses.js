import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Expenses ({item, pressHandler }) {


    return(
        <TouchableOpacity  style={styles.items}>
            <View>
                <Text> {item.text} </Text>
                <Text> {item.price} $ </Text>
            </View>
           
            <MaterialIcons name='delete' size={20} onPress={() => pressHandler(item.key)} />
        </TouchableOpacity>
        
    )

}

const styles = StyleSheet.create({
    items : {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center',
        alignItems:'center',
        padding: 10,
        marginTop:16,
        borderBottomWidth:1,
        borderBottomColor:'#728C00',
        borderRadius:77,
    },
    
})