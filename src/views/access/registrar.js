//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    AsyncStorage,
    Image
} from 'react-native';
import COLORS from '../../constant/colors';
import content from '../../style/default/contents';
import inputs from '../../style/default/inputs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import buttons from '../../style/default/buttons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Toast, { DURATION } from 'react-native-easy-toast';
import { Actions } from 'react-native-router-flux';
import { Icon, Header, Avatar } from 'react-native-elements';
import ModalAlert from '../app/modal-alert';
import ImagePicker from 'react-native-image-picker';
import  {addUser}  from '../../constant/API';
import usuario from '../../style/usuario/usuario';

// create a component
class Registrar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalAlertVisible: false,
            nombre: '',
            usuario: '',
            correo: '',
            telefono: '',
            direccion: '',
            password: '',
            error: '',
            avatarData: '',
            avatarSource: '',
            tipo: '',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('user').then((value) => {
            this.setState({
                user: JSON.parse(value),
            });
            setTimeout(function () {
            }.bind(this), 1000);
        });
    }
    //Obtiene el detalle de cada Plantilla

    _validateAddUsuarioAction() {
        if (this._validateData() != true) {
            this._saveUsuario();
        } else {
            this._renderAlert(false, '¡Debe de llenar los campos requeridos!');
        }
    }

    _validateData() {
        if (
            this.state.nombre.length === 0 ||
            this.state.correo.length === 0 ||
            this.state.telefono.length === 0 ||
            this.state.direccion.length === 0 ||
            this.state.usuario.length === 0 ||
            this.state.password.length === 0

        ) {
            return true;
        } else {
            return false;
        }

    }

    _renderAlert(state, message) {
        if (state) {
            this.refs.toast_success.show(message, DURATION.LENGTH_LONG);
        } else {
            this.refs.toast_warning.show(message, DURATION.LENGTH_LONG);
        }
    }

    _hide_modal() {
        this.setState({
            modalAlertVisible: false,
        })
    }


    _closeModalAlert() {
        this.setState({
            modalAlertVisible: true,
        })


    }


        _saveUsuario(){
            
        let user = {
            nombre: this.state.nombre,
            usuario: this.state.usuario,
            password: this.state.password,
            foto: this.state.avatarSource,
            foto_extension:this.state.tipo,
            telefono: this.state.telefono,
            correo: this.state.correo.toLocaleLowerCase(),
            direccion: this.state.direccion
        }
      //  alert(JSON.stringify(user))
        fetch(addUser, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((responseJson)=>{  
                // alert(JSON.stringify(responseJson))
                if (parseInt(JSON.stringify(responseJson.estado)) === parseInt(1)) {
                    //this._closeModalAlert();
                    setTimeout(() => { this._renderAlert(true, 'Registro Exitoso!') })
                } else {
                    setTimeout(() => { this._renderAlert(false, 'Error no se registro el usuario!') }, 650)
                }
        })
        .catch((error) => { 
            //console.log(JSON.stringify(error))
            this.setState({error:JSON.stringify(error)})
            alert('Error:'+this.state.error)
        });
        
    }
/*
    _saveUsuario() {


        let usuario = {
            nombre: this.state.nombre,
            usuario: this.state.usuario,
            password: this.state.password,
            perfil: 'Estudiante',
            user_photo: this.state.avatarData,
            user_photo_extension:this.state.tipo,
            old_foto:'',
            isActive:1,
            telefono: this.state.telefono,
            correo: this.state.correo.toLocaleLowerCase(),
            direccion: this.state.direccion
        }
     //  alert(JSON.stringify(usuario))
        // Alert.alert('Title:'+appointment.travelExpensesId+'Final:'+appointment.endDateAppointment)
        //  Alert.alert('Fecha:'+appointment.startDateAppointment)
        fetch(addUser, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        })
        .then(res => res.json())
          .then(result => {
             
                alert('resultado'+JSON.stringify(result))
                if (parseInt(JSON.stringify(result)) == parseInt(1)) {
                    //this._closeModalAlert();
                    setTimeout(() => { this._renderAlert(true, 'Registro Exitoso!') })
                } else {
                    setTimeout(() => { this._renderAlert(false, 'Error no se registro el usuario!') }, 650)
                }

            })
            .catch((error) => {
                this.setState({ err: JSON.stringify(error) })
            });

        setTimeout(() => {
            //this._closeModalAlert(); 
        }, 2000);

        //this._closeModalAlert();
    }*/
    _renderImageUserInfo() {
        return (
            <View style={{ margin: 5 }}>
                <View style={{ marginLeft: '25%', justifyContent: 'center', alignContent: 'center' }}>
                    <TouchableOpacity onPress={this._selectPhotoTapped.bind(this)}>
                        <View style={[usuario.avatar, usuario.avatarContainer, { marginBottom: 20 }]}>
                            {this.state.avatarSource === null || this.state.avatarSource === '' ?
                                <View>
                                    <Image
                                        style={usuario.avatar}
                                        source={require('../../../src/image/not_image_icon.png')}
                                    />
                                </View>
                                :
                                <Image style={usuario.avatar} source={this.state.avatarSource} />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderNav = () => {
        return (
            <Header
                leftComponent={<Icon
                    //raised
                    name='arrow-back'
                    //type='entypo'
                    color='#fff'
                    onPress={() => Actions.replace('loginView')} />
                }
                centerComponent={{ text: 'Registrar', style: { color: '#fff' } }}
                backgroundColor={COLORS.primary}

                centerContainerStyle={{ justifyContent: 'space-around' }}
                rightComponent={<Icon
                    //raised
                    name='check'
                    //type='entypo'
                    color='#fff'
                    onPress={() => this._validateAddUsuarioAction()}
                />
                }
            />
        )
    }

    _selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWhidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackUp: true,
            },
            takePhotoButtonTitle: 'Camara',
            chooseFromLibraryButtonTitle: 'Galeria',
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response: ' + response);
            if (response.didCancel) {
                console.log('Calceled');
            } else if (response.error) {
                console.log('ImagePicker Error: ' + response.error);
            } else if (response.customButton) {
                console.log('User Tapped  Custom Button: ' + response.customButton);
            } else {
                tipo = response.uri.split(".");
                let source = { uri: response.uri };
                //You can also display the image useing data:
                //let source={uri:'data:image/jpeg;base64,' + response.data},

                this.setState({
                    avatarSource: source,
                    avatarData: response.data,
                    tipo: tipo[tipo.length - 1]
                })
            }
        });
    }

    _renderModalRegistrar() {
        return (
            //Registrar Usuario
            <View style={{ backgroundColor: '#ffffff', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'gray', paddingBottom: 10, paddingTop: 10 }}>
                {this._renderImageUserInfo()}
                <View style={{ margin: 5 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text>Nombre</Text>
                    </View>
                    <TextInput
                        style={inputs.searchInput}
                        onChangeText={(text) => this.setState({ nombre: text })}
                        placeholder="Nombre"
                        underlineColorAndroid="transparent"
                        value={this.state.nombre}
                    />
                </View>
                <View style={{ margin: 5 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text>Usuario</Text>
                    </View>
                    <TextInput
                        style={inputs.searchInput}
                        onChangeText={(text) => this.setState({ usuario: text })}
                        placeholder="Usuario"
                        underlineColorAndroid="transparent"
                        value={this.state.usuario}
                    />
                </View>
                <View style={{ margin: 5 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text>Contraseña</Text>
                    </View>
                    <TextInput
                        style={inputs.searchInput}
                        onChangeText={(text) => this.setState({ password: text })}
                        placeholder="Contraseña"
                        underlineColorAndroid="transparent"
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ margin: 5 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text>Telefono</Text>
                    </View>
                    <TextInput
                        style={inputs.searchInput}
                        onChangeText={(text) => this.setState({ telefono: text })}
                        placeholder="Telefono"
                        underlineColorAndroid="transparent"
                        value={this.state.telefono}
                        keyboardType={"numeric"}
                    />
                </View>
                <View style={{ margin: 5 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 3 }}>
                        <Text labelStyle={inputs.label} >Correo</Text>
                    </View>
                    <TextInput
                        style={[inputs.searchInput]}
                        onChangeText={(text) => this.setState({ correo: text })}
                        placeholder="Correo"
                        underlineColorAndroid="transparent"
                        value={this.state.correo}
                        keyboardType={"email-address"}
                    />
                </View>
                <View style={{ margin: 5 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 3 }}>
                        <Text labelStyle={inputs.label} >Direccion</Text>
                    </View>
                    <TextInput
                        style={[inputs.searchInput, inputs.fumiInputsTextArea]}
                        onChangeText={(text) => this.setState({ direccion: text })}
                        placeholder="Direccion"
                        underlineColorAndroid="transparent"
                        value={this.state.direccion}
                    />
                </View>

            </View>
        )
    }
    render() {

        return (
            <View style={[content.containerHeader, { justifyContent: 'space-between' }]}>
                {this.renderNav()}

                <View style={{flex:1}}>
                    <ScrollView>

                        {this._renderModalRegistrar()}

                    </ScrollView>
                </View>

                <Toast
                    ref="toast_success"
                    style={{ backgroundColor: COLORS.success }}
                    position='bottom'
                    ///  positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={2000}
                    opacity={0.8}
                    textStyle={{ color: 'white' }}
                />

                <Toast
                    ref="toast_warning"
                    style={{ backgroundColor: COLORS.warning }}
                    position='bottom'
                    //   positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={2000}
                    opacity={0.8}
                    textStyle={{ color: 'white' }}
                />

                <ModalAlert
                    visible={this.state.modalAlertVisible}
                    hide_modal={this._hide_modal.bind(this)}
                    closeModalAlert={this._closeModalAlert.bind(this)}
                />
            </View>
        );
    }

}

//make this component available to the app
export default Registrar;