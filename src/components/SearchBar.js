import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign style={styles.iconStyle} name='search1' />
            <TextInput 
            style={styles.inputStyle} 
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            autoCapitalize='none'
            autoCorrect={false}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        borderRadius: 5,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,

    }
});

export default SearchBar;