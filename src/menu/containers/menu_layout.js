import React, { Component } from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux';
import modals from '../../style/default/modals';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../constant/colors'
import HeaderMenu from './header_menu'
import Modals from 'react-native-modal'
import Accordion from 'react-native-collapsible/Accordion';
import HrSeparator from '../app/components/hr-separator'
import { validatePermission, } from '../../functions/functions'

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
        <HeaderMenu />
        {
          this.renderCloseSession()
        }
        <ScrollView style={{ paddingBottom: 20 }}>
          <View style={styles.menuView}>

            <Accordion
              sections={
                [
                  {
                    title:
                      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <View style={{ paddingRight: 5, }} >
                          <Ionicons name="md-cart" size={25} color={COLOR.secondary_icon} />
                        </View >

                        <Text style={{ color: COLOR.primary_icon }} >Mercadeo  </Text>
                      </View >
                    ,

                    content:
                      <View >

                        <TouchableOpacity
                          style={styles.button}
                          //      onPress={() => Actions.replace('appoitmen')} >
                          onPress={() => {
                        //    this.props.openMenu()
                            Actions.curso()
                          }} >
                          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <View style={{ paddingRight: 5, }} >
                              <Ionicons name="ios-folder" size={25} color={COLOR.secondary_icon} />
                            </View >
                            <Text style={{ color: COLOR.primary_icon }} >Cursoss  </Text>
                          </View >
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.button}
                          //      onPress={() => Actions.replace('appoitmen')} >
                          onPress={() => {
                           // this.props.openMenu()
                            Actions.matricula()
                          }} >
                          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <View style={{ paddingRight: 5, }} >
                              <Ionicons name="ios-clock" size={25} color={COLOR.secondary_icon} />
                            </View >
                            <Text style={{ color: COLOR.primary_icon }} >Matricula</Text>
                          </View >
                        </TouchableOpacity>


                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => Actions.pago()} >
                          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <View style={{ paddingRight: 5, }} >
                              <Ionicons name="ios-card" size={25} color={COLOR.secondary_icon} />
                            </View >
                            <Text style={{ color: COLOR.primary_icon }}> Pagos</Text>
                          </View >
                        </TouchableOpacity>


                        <TouchableOpacity
                          style={styles.button}
                          onPress={() => Actions.sucursal()} >

                          <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <View style={{ paddingRight: 5, }} >
                              <Ionicons name="md-mail" size={25} color={COLOR.secondary_icon} />
                            </View >
                            <Text style={{ color: COLOR.primary_icon }}>Sucursal</Text>
                          </View >
                        </TouchableOpacity>
                      </View>
                  },
                ]
              }

              renderHeader={this._renderHeader}
              renderContent={this._renderContent}

            />

            <View>

            </View>


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

        <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center', width: '100%', backgroundColor: '#F1F1F1', margin: 5 }}>

          <View >
            <Text style={{ color: COLOR.primary_icon }} >VERSIÓN 1.0.0 </Text>
          </View>

        </View>
      </View>
    );
  }

  renderCloseSession() {
    return (
      <Modals
        isVisible={this.state.closeSession}
        style={modals.modal}
        supportedOrientations={['landscape', 'portrait']}
        animationOut="slideOutDown">
        <View>
          <View style={modals.alert}>
            <Ionicons name={'ios-alert-outline'} style={[modals.alertIcon, { color: 'red' }]} />
            <Text style={modals.alertText}>¿Desea cerrar la sesión?</Text>
          </View>
          <View style={modals.buttonContainer}>
            <TouchableOpacity
              style={modals.cancelButton}
              onPress={() => this.setState({ closeSession: false })}>
              <Text style={modals.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modals.confirmButton}
              onPress={() => {
                this.setState({ closeSession: false })

                setTimeout(() => {
                  AsyncStorage.removeItem('permisson')
                  AsyncStorage.removeItem('user')

                  Actions.loginSelect()
                }, 650)

              }}>
              <Text style={modals.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modals>
    )
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