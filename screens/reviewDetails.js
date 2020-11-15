import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function ReviewDetails() {
  return (
    <View style={styles.about}>
      <Text style={styles.text}>Navigation Screen for all previous expenses will be retrive from database</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  about: {
    padding:20,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  text:{
 fontSize:20,
  }
})