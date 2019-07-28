import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

export default class index extends Component {
  render() {
    return (
      <View style={styles.wrapper} >
    <Swiper style={styles.wrapper} height={180}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: -7,
          }} loop>
          <View style={styles.slide} >
            <Image resizeMode='stretch' style={styles.image} source={{uri:'https://images.unsplash.com/photo-1467226632440-65f0b4957563'}} />
          </View>
          <View style={styles.slide} >
          <Image resizeMode='stretch' style={styles.image} source={{uri:'https://images.unsplash.com/photo-1449824913935-59a10b8d2000'}} />
          </View>
          <View style={styles.slide} >
          <Image resizeMode='stretch' style={styles.image} source={{uri:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da'}} />
          </View>
        </Swiper>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  wrapper: {
    marginBottom:15
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
})
