import React from 'react';
import {View, StyleSheet,Text,Dimensions} from 'react-native';
const Knowledge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>NEWS/BLOGS</Text>
      <Text style={styles.header}>EMERGENCY NUMBERS</Text>
      <Text style={styles.header}>MEDICAL EMERGENCY</Text>
    </View>
  );
};

export default Knowledge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232124',
  },
  header:{
    color:'white',
    fontSize:22,
    marginLeft:20,
  }

})