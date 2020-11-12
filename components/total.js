import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Total ({totalnum}){

var sum = totalnum.reduce(function(a, b){
    return a + b;
}, 0);

return (
    <View style={styles.total}>
        <Text style={styles.baseText}>Total Expenses=  {sum}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    total : {
        
        paddingTop:30,
    },

    baseText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20
    }
  });