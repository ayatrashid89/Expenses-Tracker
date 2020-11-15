import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/header'


export default function About({navigation}) {
  return (
    <View>
      <Header name='About' logo='calculator' navigation={navigation} />
      
       <View>
      <Text style={styles.about}>Navigation Screen for all previous details will be retrive from database</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   
    about: {
     
      padding: 20,
    
    }
})