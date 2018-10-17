import React from 'react';

import {
    View,
    Text,
    StyleSheet
}from 'react-native';


function HrSeparator(props){
    return(
        <View style={[styles.separator,
            {
                borderTopColor: (props.color) ? props.color : '#E0E0E0'
            }
        ]}>
        </View>
    )   
}
const styles = StyleSheet.create({
    separator:{
        marginHorizontal:  10,
        borderTopWidth: 1,
        height:1
    }
})
export default HrSeparator;