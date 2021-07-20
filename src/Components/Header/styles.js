import {StyleSheet} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        flexDirection: 'row',

        backgroundColor: '#321B73',
        width: '100%',
        height: '15%',
        paddingTop: 35,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: getStatusBarHeight()
    },
    containerLogo:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgPower:{
        position: 'absolute',
        right: 13,
        top: 3
    }
})

export default styles