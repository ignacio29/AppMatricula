import {Platform,PixelRatio} from 'react-native';
const colors = require('../../constant/colors')
let ios = Platform.OS === 'ios'
let COLORS = require('../../constant/colors')
module.exports = {
    

    container: { 
        flex: 1,
        paddingBottom:6,
       // paddingLeft: 5,
        //paddingRight: 5,
        paddingTop: 6,
        backgroundColor: 'white',
            
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 5,
        width: 150,
        height: 150
    },

}