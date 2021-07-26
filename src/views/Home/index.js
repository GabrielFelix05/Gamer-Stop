import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import styles from './styles'

import Header from '../../Components/Header'
import Platform from '../../Components/Games-Platform'

import playstation from '../../Assets/playstation.png'
import xbox from '../../Assets/xbox.png'
import nintendoswitch from '../../Assets/nintendo-switch.png'
import Games from '../../Components/Games'
import pes from '../../Assets/pes.png'
import cyberpunk from '../../Assets/Cyberpunk.png'
import god from '../../Assets/god.png'
import fortnite from '../../Assets/fortnite.png'

function Home({navigation}){
    function navigationInitial(){
        navigation.navigate('Initial')
    }
    return(
        <View style={styles.container}>
            <Header navigationInitial={navigationInitial}/> 
            <View style={styles.containerHome}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>choose your platform</Text>
                    
                    <View style={styles.containerScrollView}>
                        <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
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
                    
                    <View style={styles.containerGames}>
                        <Text style={styles.title}>Games</Text>
                        <Text style={styles.subTitle}>select a produts</Text>
                        
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Games img={pes} name={"PES 2021"}/>
                            <Games img={cyberpunk} name={"Cyberpunk"} selectGames={styles.selectGames}/>
                            <Games img={pes} name={"PES 2021"}/>
                            <Games img={cyberpunk} name={"Cyberpunk"}/> 
                        </ScrollView>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Games img={god} name={"God of war"}/>
                            <Games img={fortnite} name={"Fortnite"}/>
                            <Games img={god} name={"God of war"}/>
                            <Games img={fortnite} name={"Fortnite"}/>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
} 

export default Home