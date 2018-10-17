import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  StyleSheet,
  View, 
  StatusBar
}from 'react-native'
import Dashboard from './dashboard'
import COLOR from '../../constant/colors'
//Clasketings of marketing
import Curso from '../../views/curso/curso';
import Matricula from '../../views/matricula/matricula';

import Pago from '../../views/pago/pago';
import Registrar from '../../views/access/registrar';
import Sucursal from '../../views/sucursal/sucursal';



/////////////////////////////Login Views

import LoginView from '../access/loginView'


const DashboardApp = () => {
    return (
      
        //<Router navigationBarStyle={ {backgroundColor: '#0D0556'} } sceneStyle= {{ alignContent:'center'}} >
        <Router navigationBarStyle={ {backgroundColor: COLOR.secondary_icon} } sceneStyle= {{ alignContent:'center'}}  >
        
        <Scene key="root"  titleStyle={{alignSelf: 'center'}} >

          <Scene titleStyle={{color: COLOR.scene_title_color}}
            key="loginView"
            duration={0}
            component={LoginView}
            hideNavBar
          />
          
          
          <Scene titleStyle={{color: COLOR.scene_title_color}}
            key="dashboard"
            duration={0}
            //navBarButtonColor={COLOR.back_icon}
            component={Dashboard}
            title="Dashboard" 
            hideNavBar
    //        initial
          />
          <Scene titleStyle={{color: COLOR.scene_title_color}}
            key="curso"
            navBarButtonColor={COLOR.back_icon}
            component={Curso}
            title="Cursos" 
            style = {color='red'}
          />
          <Scene titleStyle={{color: COLOR.scene_title_color}}
            key="matricula"
            component={Matricula}
            navBarButtonColor= {COLOR.alert_info}
            title="Matricula" 
          />
          <Scene titleStyle={{color: COLOR.scene_title_color}}
            key="pago"
            component={Pago}
            title="Pago" 
            hideNavBar 
          />
            <Scene titleStyle={{color: COLOR.scene_title_color}}
              key="sucursal"
              component={Sucursal}
              title="Sucursales " 
              navBarButtonColor={COLOR.back_icon}
            />
            <Scene titleStyle={{color: COLOR.scene_title_color}}
            key="registrar"
            component={Registrar}
            title="Registrarse" 
            navBarButtonColor={COLOR.back_icon}
            hideNavBar
          />
        
        </Scene>
       
        </Router>
    
    )};

    export default DashboardApp;