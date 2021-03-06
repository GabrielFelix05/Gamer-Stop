import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Initial from '../views/Initial'
import Home from '../views/Home'

const Stack = createStackNavigator()
function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
          
            <Stack.Screen 
                name="Initial" 
                component={Initial}
            />
            <Stack.Screen 
                name="Home" 
                component={Home}
            />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
  export default Routes