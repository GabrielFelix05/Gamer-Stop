import React from 'react'
import {View, Image} from 'react-native'
import styles from './styles'

import playstation from '../../Assets/playstation.png'

function Platform({icon, select}){
    return(
        <View style={styles.container}>            
            <View style={[styles.containerPlatform, select]}>
                <View style={styles.platformBody}>
                    <Image 
                        style={styles.imgPlatform}
                        source={icon}
                    />
                </View>    
            </View>
        </View>
    )
}

export default Platform