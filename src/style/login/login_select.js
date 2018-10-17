import { Platform } from 'react-native'
let COLORS = require('../../constant/colors')
//let DEVICE_INFO = require('react-native-device-info')
let ios = Platform.OS === 'ios'
module.exports = {
    backgroundColorScreen:{
        backgroundColor:COLORS.primary_icon,
    },
    modalSelect: {
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderStyle: 'dashed',
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      //  paddingVertical: 5,
        backgroundColor: 'white',
        borderColor:  'white',
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    imageRoundSelect: {
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderStyle: 'dashed',
        width: 180,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75
    },
    imagePicker: {
        width: 140,
        height: 140,
        borderRadius: 70
    },
}