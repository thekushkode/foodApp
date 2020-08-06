import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Image
                    source={require('../../assets/food.jpg')}
                    onLoad={() => {
                        setTimeout(() => {
                            navigation.navigate('Search')
                        }, 5000);
                    }}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default withNavigation(HomeScreen);