import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles'

import imgArrowLeft from '../../Assets/arrowLeft.png'
import logoHeader from '../../Assets/logoHeader.png'
import power from '../../Assets/powerHeader.png'
import search from '../../Assets/search.png'

function Header({navigationInitial}){
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={navigationInitial}   
            >
                <Image
                    source={imgArrowLeft}
                />
            </TouchableOpacity>

            <View styl={styles.containerLogo}>
                <Image
                    source={logoHeader}
                />
                 <Image
                    source={power}
                    style={styles.imgPower}
                />
            </View>

            <TouchableOpacity>
                <Image
                    source={search}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header