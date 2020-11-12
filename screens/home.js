import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Header from '../components/header';
import Expenses from '../components/expenses'
import Total from '../components/total';
import AddItems from '../components/addExpenses'

export default function Home({navigation}) {
  const [expenses, setExpenses] = useState([
    { text: 'Gas', num: 25 , key: '1' },
    { text: 'Grocery', num: 30 ,key: '2' },
    { text: 'Mall shopping', num: 55 ,key: '3' }
  ]);

  const pressDeleteHandler = (key) => {
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

  const pressNavigation = () => {
    navigation.navigate('ReviewDetails')
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
                <Expenses item={item} pressHandler={pressDeleteHandler} />
              )}
            />
          </View>
          <View>
            <Total totalnum={totalnum()} />
          </View>
          <View style={styles.navButton}>
            <Button title='Previous Expenses' onPress={pressNavigation} size="sm" color='#728C00' />
          </View>
        </View>
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
    flex:1,
    padding: 40,
  
  },
  list: {
    flex:3,
    marginTop: 20,
    
  },
  navButton:{
    marginTop:10,
    marginHorizontal:50,
  }
});