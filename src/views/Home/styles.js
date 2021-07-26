import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingBottom: 100
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
    containerScrollView:{
        marginBottom: 40
    },  
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 20
    },
    subTitle:{
        color: '#A19FA1',
        fontSize: 23,
        paddingLeft: 20
    },  
    select:{
        borderWidth: 2,
        borderColor: '#C83C3C'
    },
    selectGames:{
        borderWidth: 3,
        borderColor: '#17D16D',
        width: 196,
    },
    containerGames:{
        
    }
})

export default styles