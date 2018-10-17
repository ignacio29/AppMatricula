import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import modals from '../../style/default/modals';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../constant/colors';
import HeaderMenu from './header_menu';
import Modals from 'react-native-modal';
import Accordion from 'react-native-collapsible/Accordion';
import HrSeparator from '../app/components/hr-separators';
//import { validatePermission, } from '../../functions/functions'
/*import {
  get_API_change_dollar_buy, get_API_change_dollar_sale
} from '../../constant/API'*/
class MenuLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSection: false,
      collapsed: true,
      closeSession: false,
      sale: 'Cargando...',
      buy: 'Cargando...',
    }
  }
  _renderHeader(section) {
    return (
      <View style={{ flexDirection: 'row', padding: 10 }} >
        {section.title}
        <View style={{ position: 'absolute', top: 10, right: 20, }}>
          <Ionicons name="md-arrow-dropdown" size={25} color={COLOR.primary_icon} />
        </View>
        <HrSeparator />
      </View>
    )
  }
  _renderContent(section) {
    return (
      <View style={{ flexDirection: 'row', paddingLeft: 15 }} >
        {section.content}
      </View>

    );
  }

  render() {

    return (
      <View style={styles.container}>
        <HeaderMenu  />
        <ScrollView style={{ paddingBottom: 20 }}>
          <View style={styles.menuView}>

            <Accordion
              sections={
                [
                  {
                    title:
                      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <View style={{ paddingRight: 5, }} >
                          <Ionicons name="ios-planet" size={25} color={COLOR.secondary_icon} />
                        </View >

                        <Text style={{ color: COLOR.primary_icon }} >Instituto  </Text>
                      </View >
                    ,

                    content:
                      <View >
                       
                          <TouchableOpacity
                            style={styles.button}
                            //      onPress={() => Actions.replace('appoitmen')} >
                          onPress={() => {
                            this.props.openMenu()
                            Actions.curso()
                          }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                              <View style={{ paddingRight: 5, }} >
                                <Ionicons name="ios-bookmarks" size={25} color={COLOR.secondary_icon} />
                              </View >
                              <Text style={{ color: COLOR.primary_icon }} >Curso  </Text>
                            </View >
                          </TouchableOpacity>
                        
                            <TouchableOpacity
                          style={styles.button}
                          onPress={() => Actions.matricula()} >
                          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <View style={{ paddingRight: 5, }} >
                              <Ionicons name="ios-clipboard" size={25} color={COLOR.secondary_icon} />
                            </View >
                            <Text style={{ color: COLOR.primary_icon }}> Matricula</Text>
                          </View >
                        </TouchableOpacity>
                
                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => Actions.pago()} >
                          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <View style={{ paddingRight: 5, }} >
                              <Ionicons name="md-card" size={25} color={COLOR.secondary_icon} />
                            </View >
                            <Text style={{ color: COLOR.primary_icon }}> Pago</Text>
                          </View >
                        </TouchableOpacity>
                        
                         <TouchableOpacity
                            style={styles.button}
                            onPress={() => Actions.sucursal()} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                              <View style={{ paddingRight: 5, }} >
                                <Ionicons name="ios-home" size={25} color={COLOR.secondary_icon} />
                              </View >
                              <Text style={{ color: COLOR.primary_icon }}> Sucursal</Text>
                            </View >
                          </TouchableOpacity>
                        
                      </View>
                  },
                ]
              }

              renderHeader={this._renderHeader}
              renderContent={this._renderContent}

            />
             <TouchableOpacity
              style={[styles.button, { paddingVertical: 50 }]}
              onPress={() => this.setState({
                closeSession: true
              })
              } >
              <View style={{ flexDirection: 'row' }} >
                <View style={{ paddingLeft: 10, paddingRight: 5 }} >
                  <Ionicons name="md-log-in" size={20} color={COLOR.secondary_icon} />
                </View >
                <Text style={{ color: COLOR.primary_icon }} >Cerrar sesión  </Text>
              </View >
            </TouchableOpacity>
          </View>
        </ScrollView>


          <View >
            <Text style={{ color: COLOR.primary_icon }} >VERSIÓN 1.0.0 </Text>
          </View>


      </View>
    );
  }


}
export default MenuLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  menuView: {

  },
  menuItem: {
    padding: 15,
  },
  menuOption: {

    padding: 10,
    margin: 10,
  },
  button: {
    padding: 5,
    justifyContent: 'center'

  }
});