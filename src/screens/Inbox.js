import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>GENERAL REPORTS</Text>
      <TouchableOpacity>
        <View style={styles.card}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: '#FFFFFF',
              borderStyle: 'solid',
              borderRadius: 15,
            }}>
            <Image
              source={require('../assets/crime.jpg')}
              style={{
                width: 80,
                height: 80,
                margin: 5,
                marginTop: 8,
                marginLeft: 1,
              }}></Image>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderStyle: 'solid',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 5,
                  fontSize: 12,
                }}>
                CRIME TYPE:
                <Text
                  style={{
                    color: 'black',
                    fontSize: 11,
                    fontWeight: 'normal',
                    marginRight: 1,
                  }}>
                  Murder
                </Text>
              </Text>

              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                DESCRIPTION:
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  Lorem Ipsum
                </Text>
              </Text>

              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                LOCATION :
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  Matunga
                </Text>
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                PHONE NUMBER :
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  +91 8562471945
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.card}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: '#FFFFFF',
              borderStyle: 'solid',
              borderRadius: 15,
            }}>
            <Image
              source={require('../assets/crime.jpg')}
              style={{
                width: 80,
                height: 80,
                margin: 5,
                marginTop: 8,
                marginLeft: 1,
              }}></Image>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderStyle: 'solid',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 5,
                  fontSize: 12,
                }}>
                CRIME TYPE:
                <Text
                  style={{
                    color: 'black',
                    fontSize: 11,
                    fontWeight: 'normal',
                    marginRight: 1,
                  }}>
                  Murder
                </Text>
              </Text>

              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                DESCRIPTION:
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  Lorem Ipsum
                </Text>
              </Text>

              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                LOCATION :
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  Matunga
                </Text>
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                PHONE NUMBER :
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  +91 8562471945
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.header}>MY REPORTS</Text>
      <TouchableOpacity>
        <View style={styles.card}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: '#FFFFFF',
              borderStyle: 'solid',
              borderRadius: 15,
            }}>
            <Image
              source={require('../assets/crime.jpg')}
              style={{
                width: 80,
                height: 80,
                margin: 5,
                marginTop: 8,
                marginLeft: 1,
              }}></Image>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderStyle: 'solid',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: 5,
                  fontSize: 12,
                }}>
                CRIME TYPE:
                <Text
                  style={{
                    color: 'black',
                    fontSize: 11,
                    fontWeight: 'normal',
                    marginRight: 1,
                  }}>
                  Murder
                </Text>
              </Text>

              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                DESCRIPTION:
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  Lorem Ipsum
                </Text>
              </Text>

              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                LOCATION :
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  Matunga
                </Text>
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
                PHONE NUMBER :
                <Text
                  style={{color: 'black', fontSize: 11, fontWeight: 'normal'}}>
                  +91 8562471945
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232124',
  },
  header: {
    color: 'white',
    fontSize: 22,
    marginLeft: 20,
  },

  card: {
    height: 100,
    width: 370,
    paddingLeft: 10,
    margin: 15,
    marginLeft: 15,

    marginTop: 5,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderStyle: 'solid',
    borderRadius: 15,
  },
});
