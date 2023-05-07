import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as RouteKey from '../../Constants/router';
import * as page from '../index'

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={RouteKey.Home} screenOptions={{ headerShown: false }} >
                <Stack.Group>

                    <Stack.Screen name={RouteKey.Home} component={page.Home} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})