import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {shiftAnimatedStyles} from 'react-native-snap-carousel/src/utils/animations';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Textinput from '../components/TextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];
const Report = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>CRIME REPORT</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail"
          size={20}
          color="#393E46"
          style={{paddingLeft: 10}}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Fullname"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail"
          size={20}
          color="#393E46"
          style={{paddingLeft: 10}}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Mobile number"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail"
          size={20}
          color="#393E46"
          style={{paddingLeft: 10}}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Age"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail"
          size={20}
          color="#393E46"
          style={{paddingLeft: 10}}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Aadhar Card Number"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.location}>
      <View style={styles.inputContainer1}>
        <Ionicons
          name="mail"
          size={20}
          color="#393E46"
          style={{paddingLeft: 10}}
        />
        <TextInput
          style={styles.textInput1}
          placeholder="Pincode"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.inputContainer1}>
        <Ionicons
          name="mail"
          size={20}
          color="#393E46"
          style={{paddingLeft: 10}}
        />
        <TextInput
          style={styles.textInput1}
          placeholder="City"
          placeholderTextColor="gray"
        />
      </View>
      <View style={styles.inputContainer1}>
        <Ionicons
          name="mail"
          size={20}
          color="#393E46"
          style={{paddingLeft: 10}}
        />
        <TextInput
          style={styles.textInput1}
          placeholder="State"
          placeholderTextColor="gray"
        />
      </View>
      </View>
      <TextInput
          style={styles.textInputBig}
          placeholder="Crime Description and Details"
          placeholderTextColor="gray"
        />
        <View style={styles.inputContainer}>
        <Ionicons
          name="mail"
          size={20}
          color="#393E46"
          style={{paddingLeft: 10}}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Upload Proof"
          placeholderTextColor="gray"
        />

      </View>
      <Text>Crime Visibility</Text>
      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          //onPress={(value) => {this.setState({value:value})}}
        />
      </View>
      <View style={styles.buttonview}>
        <TouchableOpacity>
          <Text style={styles.button}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View></ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('85%'),
    borderRadius: 10,
    height: 50,
    marginBottom:10,
    marginTop:10
    // marginTop: 15
  },
  inputContainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('25%'),
    borderRadius: 10,
    height: 50,
    margin:10
    // marginTop: 15
  },
  textInput: {
    marginLeft: 5,
    backgroundColor: 'white',
    fontSize: 12,
    color: 'black',
    paddingLeft: 5,
    fontWeight: '600',
  },
  textInputBig: {
    marginLeft: 5,
    backgroundColor: 'white',
    fontSize: 12,
    color: 'black',
    paddingLeft: 5,
    fontWeight: '600',
    width: wp('82%'),
    height:hp('20%')
  },
  textInput1: {
    marginLeft: 5,
    backgroundColor: 'white',
    fontSize: 12,
    color: 'black',
    paddingLeft: 5,
    fontWeight: '600',
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#FCC13F',
    // borderColor: '#FB008B',
    // borderWidth: 2,
    marginLeft: 110,
    marginTop: 40,
    borderRadius:12
  },
  button: {
    color: '#FB008B',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    fontWeight:'700'
  },
});
export default Report;
