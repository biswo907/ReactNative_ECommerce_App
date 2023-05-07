import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyle } from '../../Styles/styles'
import Header from '../../Component/Header'

const Home = () => {
    return (
        <View style={defaultStyle}>

            {/* Header */}
            <Header />


            <View>
                <Text style={{ fontSize: 25 }}>Our</Text>
                <Text style={{ fontSize: 25, fontWeight: '900' }}>Product</Text>
            </View>
        </View>
    )
}

export default Home

