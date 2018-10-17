import React, { Component } from 'react'

import { Alert, AppRegistry, AsyncStorage, Image, TouchableOpacity, Dimensions } from 'react-native';

import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';
const COLORS = require('../../constant/colors')
import { Actions } from 'react-native-router-flux'; // New code
import Toast, { DURATION } from 'react-native-easy-toast'
import buttons from '../../style/default/buttons';
import content from '../../style/default/contents';
import inputs from '../../style/default/inputs';
import modals from '../../style/default/modals';
import toast from '../../style/default/toast';
import _Login from '../../style/login/login_select'
import DashboardApp from '../app/dashboard-app';
import { login } from '../../constant/API';
import Loading from '../loading_circle'
//import LoadingHome from '../loading'
import Ionicons from 'react-native-vector-icons/Ionicons';

import DIMENSION from '../../functions/dimensions'

const fields = [
  {
    type: 'text',
    name: 'usuario',
    required: true,
    icon: 'md-person',
    label: 'Usuario',
    defaultValue: '',
    //defaultValue: 'adanca16@gmail.com',

  },
  {
    type: 'password',
    name: 'password',
    icon: 'ios-lock',
    required: true,
    label: 'Contraseña',
    defaultValue: '',
  },

];

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessUser: false,
      loading: false,
      temp: '',
      loadingHome: true,
      returnHome: false,
      orientation: DIMENSION.isPortrait() ? 'portrait' : 'landscape',
      // width: width,
      // height: height
    }
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: DIMENSION.isPortrait() ? 'portrait' : 'landscape',
        //width: this.state.height,
        //height: this.state.width,
      });
    });
  }
  /*componentDidMount(){
    this.verificatingToken()
  }*/

  /* async verificatingToken(){
     AsyncStorage.getItem('user').then((value) => {
       
       if (JSON.parse(value)!== null){
         this.setState({
           loadingHome:false,
           accessUser:true
         })
         if (this.state.accessUser) {
           return (
             Actions.dashboard()
             //<DashboardApp/>
           )
         }
       }else{
         this.setState({
           loadingHome:false
         })
       }
     })
   }*/


  login() {
    this.setState({
      loading: true
    });
    const formValues = this.formGenerator.getValues();
    (async () => {
      const rawResponse = await fetch(login, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo: formValues.usuario,
          contrasena: formValues.password
        }
        )
      });

      this.setState({
        //loadingHome:false,
        // accessUser:true,
        loading: false
      })

      Actions.dashboard();
      
    })().catch((error) => {
      this.setState({ loading: false })
      this.refs.toast_warning.show("Verifique los credenciales!", DURATION.LENGTH_LONG);

    });
  }


  render() {

    /* if(this.state.loading){
         return(
           <Loading/>
         )
     }*/

    return (
      <View style={[content.container, _Login.backgroundColorScreen]}>
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

        {/*    <View>
            <TouchableOpacity onPress={ () =>Actions.loginSelect() }>
                <Ionicons style={modals.icon} name="md-arrow-back" size={30} color="white" />
            </ TouchableOpacity>    
      </View>*/}

        <View style={[this.state.orientation === 'landscape' ? {
          flexDirection: 'row',
          alignItems: 'center', justifyContent: 'center'
        } : {
          flexDirection: 'column', justifyContent: 'center',
            paddingVertical: '10%'
          }, content.container, _Login.backgroundColorScreen]}>

          {/* <Image  style={[this.state.orientation==='landscape' ?{height:'20%',width:'40%'}:{height:'40%',width:'100%'},
      {resizeMode: 'contain', }] } source={require('../../image/icon-designsoft.png')}/>*/}
          <View style={[this.state.orientation === 'landscape' ? { width: '50%', height: '100%' } :
            { width: '100%', height: '60%' }, { backgroundColor: 'white', borderRadius: 10, paddingHorizontal: '2%', }]} >
            <View>
              <GenerateForm
                ref={(c) => {
                  this.formGenerator = c;
                }}
                fields={fields}
              />
            </View>
            <Button style={[buttons.primary]}
              block onPress={() =>/*this.login()*/Actions.dashboard()
              }
                >
              <Text>Iniciar Sesión</Text>
            </Button>
            <Button style={[buttons.primary]}
              block onPress={() => Actions.registrar()
              } >
              <Text>Registrarse</Text>

            </Button>
          </View>
        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('FormGenerator', () => FormGenerator);