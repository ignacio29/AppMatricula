//import liraries
import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import inputs from '../../../style/default/inputs';
import modals from '../../../style/default/modals';
// create a component
class RequiredInfo extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#F9FBE7', justifyContent: 'center', alignItems: 'center', width: '100%', end:1 }}> 
                <Ionicons style={modals.icon} name='ios-alert' size={25} color="red" />
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{}}>Los espacios marcados con (</Text>
                    <Text style={{color:'red',textAlign:'center'}}>*</Text>
                    <Text style={{}}>) son requeridos.</Text>
                </View>
            </View>    
        );
    }
}



//make this component available to the app
export default RequiredInfo;