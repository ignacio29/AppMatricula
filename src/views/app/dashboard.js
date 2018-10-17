import React, { Component } from 'react';
import { Router, Scene} from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
//Class 
import SideMenu from 'react-native-side-menu';
import Menu from '../menu/menu_layout';
import Curso from '../../views/sucursal/sucursal';
//////////////////////////////////////////////////////Options
import { Actions } from 'react-native-router-flux'; // New code
import { Header, Icon} from 'react-native-elements';

const COLORS = require('../../constant/colors')
class Dashboard extends Component {

  constructor(props) {
    super()
    this.state = {
      isOpen: false,
    }
  }



  renderNav = () => {
    return (
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => this.openMenu()} style={{ width: 40 }} >
            <Ionicons name="md-menu" size={30} color="white" />
          </TouchableOpacity>
        }
        centerComponent={{
          text:
            "My Title"

          , style: { color: '#fff', fontSize: 20 }
        }}
        backgroundColor={COLORS.primary}

        rightComponent={<Ionicons name="ios-home" size={30} color="white" />}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <SideMenu menu={<Menu openMenu={this.openMenu.bind(this)} />} isOpen={this.state.isOpen}>
          {
             this.renderNav() 
            
          }
          <Curso/>
        </SideMenu>
      </View>
    );
  }

  openMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },

});
export default Dashboard;