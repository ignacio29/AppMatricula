//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import modals from '../../../src/style/default/modals';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
// create a component
class ModalAlert extends Component {
    render() {
        return (
            <Modal 
                isVisible={this.props.visible} 
                supportedOrientations={['landscape', 'portrait']}
                style={modals.modal}
                animationOut="slideOutDown"
            >
                <View>
                    <View style={modals.alert}>
                        <Ionicons name={'ios-alert'} style={[modals.alertIcon, {color: 'red'}]}/>
                        <Text style={modals.alertText}>¡Cuidado!</Text>
                        <Text style={{textAlign:'center'}}>¿Está seguro de realizar esta acción?</Text> 
                    </View>
                    <View style={modals.buttonContainer}>
                        <TouchableOpacity
                            style={modals.cancelButton}
                            onPress={ () => this.props.hide_modal() }>
                                <Text style={modals.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={modals.confirmButton}
                            onPress={ () => this.props.closeModalAlert() }>
                                <Text style={modals.confirmButtonText}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}



//make this component available to the app
export default ModalAlert;