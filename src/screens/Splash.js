import React,{useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Slider')
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>FIR</Text>
      <Text>
        <Text style={styles.label}>F</Text>
        <Text style={styles.data}>etch, </Text>
        <Text style={styles.label}>I</Text>
        <Text style={styles.data}>nspect and </Text>
        <Text style={styles.label}>R</Text>
        <Text style={styles.data}>eport </Text>
      </Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232124',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: hp('17%'),
    color: '#e81923',
  },
  label: {
    fontSize: hp('3%'),
    color: '#e81923',
  },
  data: {
    fontSize: hp('3%'),
    color: 'white',
  },
});
