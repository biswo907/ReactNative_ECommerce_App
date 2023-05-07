import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ back, emptyCart = false }) => {
    const navigate = useNavigation();
    return (
        <>
            {
                back && (
                    <TouchableOpacity onPress={() => navigate.goBack()}>
                        <Ionicons name="arrow-back-sharp" size={24} color="black" style={{ position: 'absolute', left: 20, top: 40, zIndex: 10 }} />
                    </TouchableOpacity>
                )
            }

            <TouchableOpacity onPress={() => navigate.navigate('cart')}>

                <AntDesign name={emptyCart ? "antdesign" : "shoppingcart"} size={24} color="black" style={{ position: 'absolute', right: 20, top: 40, zIndex: 10 }} />
            </TouchableOpacity>

        </>
    )

}

export default Header

const styles = StyleSheet.create({})