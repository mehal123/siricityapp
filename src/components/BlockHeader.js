import React, { Component } from 'react'
import { Text, StyleSheet, View , ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import styles from '../assets/style.js'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class BlockHeader extends Component {

  render() {
    return (
      
        <View style={[styles.row,styles.block]}>
          <Text style={styles.heading}>Categories</Text>
          <TouchableOpacity>
          <Text style={styles.link}>View All</Text>

          </TouchableOpacity>
        </View>
        
    )
  }
}

