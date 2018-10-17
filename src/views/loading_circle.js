import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import COLORS from '../constant/colors'
export default class LoadingCircle extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={{ backgroundColor: 'white', height: 100, width: 100, borderRadius: 20, 
        justifyContent: 'center', }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
})
