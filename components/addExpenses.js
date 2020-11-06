import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddExpenses ({submitHandler}) {

const [item, setItem] = useState('');
const [price, setPrice] = useState('');
const changeItemHandler= (val) =>{
    setItem(val)
}
const changePriceHandler= (val2) =>{
    setPrice(val2)
}
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add Itim'
                onChangeText= {changeItemHandler}
            />
             <TextInput
                style={styles.input}
                placeholder='Add Price'
                onChangeText= {changePriceHandler}
            />
            <Button
            onPress= {() => submitHandler(item,price) }
            title='Add To Your Expenses List '
            color='coral'
            />
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        textAlign: 'center',
        marginBottom: 15,
        height: 40,
        color:'black',
        borderWidth: 2,
        borderColor: 'coral',
        borderRadius: 6 ,
}
})
