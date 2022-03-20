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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Textinput from '../components/Textinput';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
var radio_props = [
  {label: 'PUBLIC', value: 0},
  {label: 'PRIVATE', value: 1},
];

const Report = () => {
  const [visibility, setVisibility] = useState('');
  const crimes = ['Robbery', 'Murder', 'Car-Accident', 'Pick-Pocket'];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>CRIME REPORT</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="ios-person"
            size={20}
            color="#FF5C5C"
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
            name="call"
            size={20}
            color="#FF5C5C"
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
            name="calendar-sharp"
            size={20}
            color="#FF5C5C"
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
            name="ios-card-outline"
            size={20}
            color="#FF5C5C"
            style={{paddingLeft: 10}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Aadhar Card Number"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="ios-list-outline"
            size={20}
            color="#FF5C5C"
            style={{paddingLeft: 10}}
          />
          {/* <TextInput
          style={styles.textInput}
          placeholder="Crime Type"
          placeholderTextColor="gray"
        /> */}
          <SelectDropdown
            data={crimes}
            style={{height:5}}
            dropdownBackgroundColor='white's
            defaultButtonText='Crime Type'
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="location-outline"
            size={20}
            color="#FF5C5C"
            style={{paddingLeft: 10}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Crime Location"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.location}>
          <View style={styles.inputContainer1}>
            <Ionicons
              name="md-location"
              size={20}
              color="#FF5C5C"
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
              name="md-location"
              size={20}
              color="#FF5C5C"
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
              name="md-location"
              size={20}
              color="#FF5C5C"
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
            name="cloud-upload-outline"
            size={20}
            color="#FF5C5C"
            style={{paddingLeft: 10}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Upload Proof"
            placeholderTextColor="gray"
          />
        </View>
        <Text style={{color:'white', marginBottom:5,fontSize:25}}>Crime Visibility</Text>
        <View style={styles.radio}>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            buttonColor={'#FF5C5C'}
            selectedButtonColor={'#FF5C5C'}
            animation={true}
            labelStyle={{fontSize: 15, color: '#FFFFFF'}}
            onPress={value => {

              setVisibility(value);
            }}
          />
        </View>
        <View style={styles.buttonview}>
          <TouchableOpacity>
            <Text style={styles.button}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232124',
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
    marginBottom: 10,
    marginTop: 10,
    borderColor: '#FF5C5C',
    borderWidth: 2,
  },
  dropdown:{
    marginLeft:10,
    backgroundColor:'white'
  },
  inputContainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: wp('25%'),
    borderRadius: 10,
    height: 50,
    margin: 10,
    borderColor: '#FF5C5C',
    borderWidth: 2,
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
    height: hp('20%'),
    borderRadius: 10,
    borderColor: '#FF5C5C',
    borderWidth: 2,
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
    backgroundColor: '#e81923',
    // borderColor: '#FB008B',
    // borderWidth: 2,
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 50,
    borderRadius: 10,
    elevation: 5,
  },
  button: {
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '700',
  },
  header: {
    color: 'white',
    fontSize: 25,
    marginTop: 30,
    marginBottom: 15,
  },
});
export default Report;
