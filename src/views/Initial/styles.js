import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#181532',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300
    }, 
    containerLogoButton:{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    logo:{
        width: 200,
        height: 118,
    },
    imgPower:{
        position: 'relative',
        left: 75,
        bottom: 52
    },  
    button:{
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 100,
        height: 60,
        paddingLeft: 30,
        paddingRight: 5,
       
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerArrowLeft:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C83C3C',
        width: 50,
        height: 50,
        borderRadius: 50
    },  
    textButton:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    containerBorderFooter:{
        position: 'relative',
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderFooter:{
        borderBottomWidth: 4,
        borderColor: '#DCDCDC',
        borderRadius: 50,
        width: 200,
    },
    imgXboxControll:{
        width: '100%',
        position: 'absolute',
        bottom: -20
    }
})

export default styles