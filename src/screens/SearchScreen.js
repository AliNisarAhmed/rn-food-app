import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import YelpAPI from '../api/yelpApi';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState([]);

  const searchApi = async () => {
    const res = await YelpAPI.getSearchResults('/search', {
      limit: 50,
      term: searchTerm,
      location: 'edmonton',
    });
    setResults(res.data.businesses);
  };

  return (
    <View>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onTermSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;
