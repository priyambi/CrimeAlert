import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

const Slider = ({navigation}) => {
  const onDone = () => {
    navigation.navigate('BottomTab');
  };
  const onSkip = () => {
    navigation.navigate('BottomTab');
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#232124',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        {/* <Text style={styles.introTitleStyle}>{item.title}</Text> */}
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
    marginTop:40,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Look out for past and present criminal activities in your locality .',
    title: 'Criminal Records',
    image:require('../assets/SOS.png'),
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Report Crimes',
    text: 'Report relevant crimes to create awareness in the community ',
    image:require('../assets/report.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'In-App Call',
    text: 'Contact emergency helpline numbers if do not feel safe.',
    image:require('../assets/call.png'),
    backgroundColor: '#22bcb5',
  },
  
];
