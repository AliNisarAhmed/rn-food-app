import { useEffect, useState } from 'react';
import yelpApi from '../api/yelpApi';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    try {
      const res = await yelpApi.get('/search', {
        params: {
          limit: 50,
          location: 'Edmonton',
          term,
        },
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
