import  React, { Component } from 'react'
import * as Progress from 'react-native-progress';
import {View,Image,}from'react-native'
import COLOR from '../constant/colors'
export default class Loading extends Component {
  render() {
    return (
        <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
            
            <View style= {{ justifyContent: 'center',alignItems: 'center'}}>    
              <Image  style={{width: 200, height: 100, resizeMode: 'contain', }} source={require('../image/icon-color-designsoft.png')}/>
            </View>
            <Progress.Bar color= {COLOR.primary_icon}  size={100} indeterminate={true} width={200}  height= {15} borderRadius={40}/>
        </View>
    )
  }
}