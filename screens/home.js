import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Header from '../components/header';
import Expenses from '../components/expenses'
import Total from '../components/total';
import AddItems from '../components/addExpenses'


export default function Home({navigation}) {
  const [expenses, setExpenses] = useState([
    { text: 'Gas', price: 25 , key: '1' },
    { text: 'Grocery', price: 30 ,key: '2' },
    { text: 'Mall shopping', price: 55 ,key: '3' }
  ]);

  const pressDeleteHandler = (key) => {
    setExpenses((prev) =>{
    return prev.filter(expense => key != expense.key )
    })
  }
  // const reset = () =>{
  //   [item, setItem] = useState('');
  //   [price, setPrice] = useState('');
  //   console.log(text, text)
  // }



  const submitHandler= (text, price ) =>{
    console.log(text,price)

    if (text.length>0 && price.length >0){
      setExpenses((prev)=> {
        return [
          {text:text, price:parseInt(price), key: Math.random().toString() },
          ...prev
        ]
      })

    
    }else{
      Alert.alert('OOPS!', 'Please enter both item and price', [
        {text: 'Ok', onPress:() => console.log('alert closed')}
      ])
    }
    
    //  setItem('');
    // [price, setPrice] = useState('');

  }

  const totalnum =() => {
    return expenses.map(item =>item.price)
  }

  const pressNavigation = () => {
    navigation.navigate('ReviewDetails')
  }

  
   return (
     <TouchableWithoutFeedback onPress ={() =>{
      Keyboard.dismiss();
     }}>
      <View style={styles.container}>
        <Header name='Expenses Tracker' logo='menu' navigation={navigation}/>
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
          <View style={styles.total}>
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
    flex:1,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.6,
    shadowRadius: 4,
    elevation: 2,
    
  },
  navButton:{
    marginTop:20,
    marginHorizontal:50,
    marginBottom:20,
  },
  total:{
    alignItems:'center',
    marginBottom:10,
  }

});