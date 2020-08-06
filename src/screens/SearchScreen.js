import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {
                errorMessage ? <Text>{errorMessage}</Text> : null
            }
            <ScrollView>
                <View>
                    <ResultsList results={filterResultsByPrice('$')} title='Penny Saver' />
                </View>
                <View>
                    <ResultsList results={filterResultsByPrice('$$')} title='Mid-Level' />
                </View>
                <View>
                    <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
                </View>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;