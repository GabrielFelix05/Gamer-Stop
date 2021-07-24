import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import styles from './styles'

import Header from '../../Components/Header'
import Platform from '../../Components/Games-Platform'

import playstation from '../../Assets/playstation.png'
import xbox from '../../Assets/xbox.png'
import nintendoswitch from '../../Assets/nintendo-switch.png'

function Home({navigation}){
    function navigationInitial(){
        navigation.navigate('Initial')
    }
    return(
        <View style={styles.container}>
            <Header navigationInitial={navigationInitial}/> 
            <View style={styles.containerHome}>
                <Text style={styles.title}>choose your platform</Text>
                
                <ScrollView 
                    horizontal={true}
                >
                    <Platform icon={playstation} select={styles.select}/>
                    <Platform icon={xbox}/>
                    <Platform icon={nintendoswitch}/>
                    <Platform icon={xbox}/>
                    <Platform icon={nintendoswitch}/>
                    <Platform icon={xbox}/>
                    <Platform icon={nintendoswitch}/>
                </ScrollView>  
                
            </View>
        </View>
    )
} 

export default Home