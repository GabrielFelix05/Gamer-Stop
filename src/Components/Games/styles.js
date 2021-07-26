import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30
    },
    containerGames:{
        width: 190,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    imgGames:{
        width: 190,
        height: 190,
        borderRadius: 20
    },
    containerText:{
        paddingTop: 5,
        paddingLeft: 10
    },
    nameGame:{
        fontSize: 25
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#321B73'
    },
    imgStars:{
        width: 70,
        marginTop: -18
    }
})

export default styles