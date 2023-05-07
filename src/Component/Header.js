import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../Styles/styles';

const Header = ({ back, emptyCart = false }) => {
    const navigate = useNavigation();
    const route = useRoute();

    const emptyCartHandler = () => {
        console.log("Emty Cart");
    }
    return (
        <>
            {
                back && (
                    <TouchableOpacity onPress={() => navigate.goBack()}
                        style={{ position: 'absolute', left: 20, top: 40, zIndex: 10 }}
                    >
                        <Ionicons name="arrow-back-sharp" size={24}
                            color={route.name === "productdetails" ? colors.color2 : colors.color3}
                        />
                    </TouchableOpacity>
                )
            }
            <TouchableOpacity onPress={emptyCart ? emptyCartHandler : () => navigate.navigate('cart')}
                style={{ position: 'absolute', right: 20, top: 40, zIndex: 10 }}
            >

                <AntDesign
                    name={emptyCart ? "antdesign" : "shoppingcart"} size={24}

                    color={route.name === "productdetails" ? colors.color2 : colors.color3} />
            </TouchableOpacity>

        </>
    )

}

export default Header

const styles = StyleSheet.create({})