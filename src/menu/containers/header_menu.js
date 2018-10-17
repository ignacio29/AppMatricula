import React, { Component } from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    AsyncStorage,
    ImageBackground,
    ScrollView
} from 'react-native'
import COLOR from '../../constant/colors';

class HeaderMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={[{ backgroundColor: COLOR.primary_icon }, styles.menu]}>

                <View style={styles.imageUserContent}>

                {/*    <Image style={styles.imageUser}
                        source={(this.props.user.photo_url === null || this.props.user.photo_url === '')
                            ? require('../../image/no-image.png') :
                            { uri: this.props.user.photo_url }}
        />*/}

                </View>
                <View style={styles.dataUserContent}>
            {  /*      <Text style={styles.dataUserName}>{this.props.user.name} {this.props.user.surname}</Text>
                    <Text style={styles.dataUser}>{this.props.user.email}</Text>
                    <Text style={styles.dataUser}>{this.props.user.phone}</Text>
        <Text style={styles.dataUser}>{this.props.user.role}</Text>*/}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    menu: {
        height: 160
    },
    content_header: {
        color: 'white'
    },
    imageUser: {
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    imageUserContent: {
        paddingLeft: 20,
        paddingTop: 10,
    },
    dataUserName: {
        color: 'white',
        fontWeight: 'bold',
    },

    dataUser: {
        color: 'white',
    },
    dataUserContent: {
        paddingTop: 5,
        paddingLeft: 20
    }
})
export default HeaderMenu;