import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import Expenses from './components/expenses';
import Total from './components/total';
import Calender from './components/calender';
import AddItems from './components/addExpenses'

export default function App() {
  const [expenses, setExpenses] = useState([
    { text: 'Gas', num: 25 , key: '1' },
    { text: 'Grocery', num: 30 ,key: '2' },
    { text: 'Mall shopping', num: 55 ,key: '3' }
  ]);

  const pressHandler = (key) => {
    setExpenses((prev) =>{
    return prev.filter(expense => key != expense.key )
    })
  }

  const submitHandler= (text, price ) =>{
    console.log(text,price)
    if (text.length>0 && price.length >0){
      setExpenses((prev)=> {
        return [
          {text:text, num:parseInt(price), key: Math.random().toString() },
          ...prev
        ]
      })
    }else{
      Alert.alert('OOPS!', 'Please enter both item and price', [
        {text: 'Ok', onPress:() => console.log('alert closed')}
      ])
    }
  }

  const totalnum =() => {
    return expenses.map(item =>item.num)
  }

  
   return (
     <TouchableWithoutFeedback onPress ={() =>{
      Keyboard.dismiss();
     }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
        <AddItems submitHandler={submitHandler} />

          {/* add todo form */}
          <View style={styles.list}>
            <FlatList
              data={expenses}
              renderItem={({ item }) => (
                <Expenses item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
          <View>
            <Total totalnum={totalnum()} />
          
          </View>
        
          </View>
      { /** <Calender */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});