import React from 'react'
import {View, Text} from 'react-native'

import Header from '../../Components/Header'

function Home({navigation}){
    function navigationInitial(){
        navigation.navigate('Initial')
    }
    return(
        <View>
            <Header navigationInitial={navigationInitial}/>
            <Text>Home</Text>
        </View>
    )
} 

export default Home