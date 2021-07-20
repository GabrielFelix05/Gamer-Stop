import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        backgroundColor: '#321B73',
        width: '100%',
        height: '40%',
        paddingLeft: 30,
        paddingRight: 30
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