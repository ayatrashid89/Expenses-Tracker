import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Header(props) {
  const openMenu=() => {
  props.navigation.openDrawer()
  }
  return (
    <View style={styles.header}>
      <SimpleLineIcons name={props.logo}size={30} color="black"style={styles.icon} onPress={ openMenu}/>
      <Text style={styles.title}>{props.name}</Text>
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
