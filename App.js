import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import Expenses from './components/expenses';
import Total from './components/total';

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
  const totalnum =() => {
    return expenses.map(item =>item.num)
  }
  
   return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
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
    </View>
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