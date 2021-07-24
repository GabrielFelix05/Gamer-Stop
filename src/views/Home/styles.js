import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerHome:{
        backgroundColor: '#E0E0F8',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        left: 0,
        top: 115,
        paddingTop: 40
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 20
    },
    teste:{
        width: 30,
        height: 30,
        backgroundColor: '#fff'
    },
    select:{
        borderWidth: 2,
        borderColor: '#C83C3C'
    }
})

export default styles