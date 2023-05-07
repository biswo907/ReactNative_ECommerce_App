import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../../Styles/styles'
import Header from '../../Component/Header'
import { AntDesign } from '@expo/vector-icons';

const Home = () => {

    const Categories = ['Shooses', 'Football', 'Man', 'T-Shirts']

    return (
        <View style={defaultStyle}>

            <Header />

            {/* Heading Row */}

            <View style={{
                paddingTop: 70,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: "center",
            }}>


                {/* Heading */}

                <View>
                    <Text style={{ fontSize: 25 }}>Our</Text>
                    <Text style={{ fontSize: 25, fontWeight: '900' }}>Product</Text>
                </View>

                {/* Serch Bar */}
                <View>
                    <TouchableOpacity>
                        <AntDesign name="search1" size={24} color="black" style={{ elevation: 12, width: 40, height: 40, textAlign: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: 'red' }} />
                    </TouchableOpacity>
                </View>
            </View>


            {/* Categories */}
            {

                Categories.map((item, index) => (
                    <View style={{
                        flexDirection: 'row',
                        height: 80
                    }}>
                        <Button title='Nice'></Button>
                    </View>

                ))
            }


        </View>
    )
}

export default Home

