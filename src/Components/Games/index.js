import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles'

import pes from '../../Assets/pes.png'
import stars from '../../Assets/stars.png'
 
function Games({img, name, selectGames}){
    return(
        <View style={styles.container}>
            <View style={[styles.containerGames, selectGames]}>
                <Image 
                    source={img}
                    style={styles.imgGames}
                />
                <View style={styles.containerText}>
                    <Text style={styles.nameGame}>{name}</Text>
                    <Text style={styles.price}>R$ 245,00</Text>
                    <Image 
                        source={stars}
                        style={styles.imgStars}
                    />
                </View>
            </View>
        </View>
    )
}

export default Games