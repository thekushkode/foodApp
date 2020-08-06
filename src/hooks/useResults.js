import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'Atlanta',
                    limit: 50
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong. Try again later.')
        }
    }

    useEffect(() => {
        searchApi('pizza')
    }, [])

    return [searchApi, results, errorMessage];
};