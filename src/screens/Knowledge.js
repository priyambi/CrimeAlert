import React, {useState} from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView} from 'react-native';
import FlipCard from 'react-native-flip-card';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH );
// const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2) / 4);

const Knowledge = () => {
  const [index, setIndex] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 150,
          padding: 20,
          //marginLeft: 2,
          borderColor:'#e81923',
          borderWidth:3,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 15}}>{item.title}</Text>
        <Text style={{fontSize: 10}}>{item.text}</Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>NEWS/BLOGS</Text>
        <Carousel
          layout={'tinder'}
          // ref={ref => carousel = ref}
          data={carouselItems}
          sliderWidth={400}
          autoplay={true}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={index => setIndex({activeIndex: index})}
        />
        <Text style={styles.header}>EMERGENCY NUMBERS</Text>
        <View style={styles.col}>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Text style={styles.quote}>NATIONAL EMERGENCY</Text>
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>112</Text>
              </View>
            </FlipCard>
          </View>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Text style={styles.quote}>POLICE</Text>
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>100</Text>
              </View>
            </FlipCard>
          </View>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Text style={styles.quote}>FIRE</Text>
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>101</Text>
              </View>
            </FlipCard>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Text style={styles.quote}>AMBULANCE</Text>
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>102</Text>
              </View>
            </FlipCard>
          </View>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Text style={styles.quote}>WOMAN</Text>
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>1091</Text>
              </View>
            </FlipCard>
          </View>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Text style={styles.quote}>DISASTER MANAGEMENT</Text>
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>108</Text>
              </View>
            </FlipCard>
          </View>
        </View>
        <Text style={styles.header}>SAFETY TIPS</Text>
        <View>
        <Text style={styles.info}>1. Don't talk to strangers.</Text>
        <Text style={styles.info}>2. Don't take anything from strangers.</Text>
        <Text style={styles.info}>3. Don't go anywhere with someone you don't know.</Text>
        <Text style={styles.info}>4. Stay more than an arm's reach from strangers. 
                                    If you are approached by a stranger, seek help immediately.</Text>
        <Text style={styles.info}>5. Trust your instincts, if you feel you are being 
                                    followed or something is not right, seek help immediately.</Text>
        <Text style={styles.info}>6. Use the buddy system, avoid walking anywhere alone.</Text>
        <Text style={styles.info}>7. Review contact telephone numbers and home safety practices.</Text>
        <Text style={styles.info}>8. When seeking help, always go to a trusted adult -
                                    teacher, coach, police officer, other parent, or older siblings.</Text>
        <Text style={styles.info}>9. If a stranger grabs you, do everything you can to stop him or her from pulling 
                                  you away. Drop to the ground, kick, hit, bite, and scream. Do whatever it takes to attract the attention of others who can help you. If someone is dragging you away, scream, “this is not my dad,” or “this is not my mom.”</Text>
      </View>
      </View>
    </ScrollView>
  );
};

export default Knowledge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232124',
  },
  header: {
    color: 'white',
    fontSize: 22,
    marginLeft: 20,
    marginTop:20,
    marginBottom:20,
  },
  container2: {
    width: 100,
    height: 100,
    backgroundColor: '#e81923',
    marginLeft: 15,
    marginTop: 15,
    elevation: 7,
    borderRadius: 10,
  },
  col: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 15,
  },
  quote: {
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 35,
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  info:{
    color:'white',
    margin:5,
    marginLeft:20,
    fontSize:15,
   
  }
});
const carouselItems = [
  {
    title: '5 super simple ways to prevent burglary',
    text: 'Before social media, bullying and harassment were something you’d typically only experience in real life; be it in person, over the phone or in written form.',
  },
  {
    title: 'What to do if you’re being harassed or bullied on social media',
    text: 'Before social media, bullying and harassment were something you’d typically only experience in real life; be it in person, over the phone or in written form.',
  },
  {
    title: '20 tips for staying safe on the road',
    text: 'Content - Sometimes, we all need to be reminded of the simple things in life. And driving really is simple – particularly when you make a concerted effort to stay safe on the road',
  },
  {
    title: 'Think a friend might be in a violent gang? ',
    text: 'Content - With knife crime up 14%, and recent news of targeted acid attacks in the country’s capital, it’s vital we all remain vigilant against gang violence.',
  },
  {
    title: 'How to spot signs of sexual abuse',
    text: 'Children who are experiencing sexual abuse might display signs of severe anxiety, such as regular nightmares or being more ‘clingy’ than normal with their parents and other loved ones.',
  },
];
