import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Fontisto name="calculator" size={30} color="#483C32"style={styles.icon}/>
      <Text style={styles.title}>Expenses Tracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    height: 80,
    paddingTop: 38,
    backgroundColor: '#348017',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:20,
  },
  icon:{
  paddingHorizontal:30,
  marginRight:10,
  }
});
