import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Expenses ({item, pressHandler }) {


    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)} style={styles.item}>
            <Text> {item.text} </Text>
             <Text> {item.num} </Text>
        </TouchableOpacity>
        
    )

}

const styles = StyleSheet.create({
    item : {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center',
        padding: 16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "solid"
    },
    
})