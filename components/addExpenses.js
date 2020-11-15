import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View, Keyboard, } from 'react-native';

export default function AddExpenses ({submitHandler}) {

const [item, setItem] = useState('');
const [price, setPrice] = useState('');

const resetForm = () => {
    setPrice('');
    setItem('');
  }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add Item'
                value={item}
                onChangeText= {(text) => setItem(text)}
            />
             <TextInput
                style={styles.input}
                placeholder='Add Price'
                value={price}
                onChangeText= {(text)=>setPrice(text)}
                keyboardType={'numeric'}
            />
            <Button
            onPress= {() => {
                submitHandler(item,price);
                resetForm();
                Keyboard.dismiss();
            }
            }
            title='Add To Your Expenses List '
            color='#348017'
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
        borderColor: '#348017',
        borderRadius: 6 ,
}
})
