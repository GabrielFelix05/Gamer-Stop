import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../../Assets/logo.png'
import power from '../../Assets/power.png'
import arrowLeft from '../../Assets/arrowLeft.png'
import xboxControll from '../../Assets/xboxControll_.png'

function Initial({navigation}){
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(50, 27, 115, .3)', 'transparent']}
                style={styles.background}
            />
                <View style={styles.containerLogoButton}>
                    <View>
                        <Image 
                            source={logo}
                            style={styles.logo}
                        />
                        <Image 
                            source={power}
                            style={styles.imgPower}
                        />
                    </View>
                    
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Home')}
                        style={styles.button}>
                            
                        <Text style={styles.textButton}>swipe to acess</Text>
                        <View style={styles.containerArrowLeft}>
                            <Image source={arrowLeft}/>
                        </View>
                    </TouchableOpacity>
                </View> 

                <View style={styles.containerBorderFooter}>
                    <View style={styles.borderFooter}/>
                </View>

          
            <Image 
                source={xboxControll}
                style={styles.imgXboxControll}  
            />  
        </View>
    )
}

export default Initial