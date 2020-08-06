import React from 'react';
import { View, Image, Text, StyleSheet, Linking } from 'react-native';
//onPress={() => Linking.openURL(result.url)}
const ResultsDetail = ({result}) => {
    return (
        <View style={{ marginBottom: 10, marginLeft: 10}}>
            <Image 
            style={ styles.imageStyle } 
            source={{ uri: result.image_url }} 
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles =StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 5,
        margin: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;