import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

import Header from '../../Components/Header'

function Home({navigation}){
    function navigationInitial(){
        navigation.navigate('Initial')
    }
    return(
        <View style={styles.container}>
            <Header navigationInitial={navigationInitial}/>
            <View style={styles.containerHome}>
            
            </View>
        </View>
    )
} 

export default Home