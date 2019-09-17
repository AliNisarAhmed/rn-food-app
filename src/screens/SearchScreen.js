import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => results.filter((res) => res.price === price);

  return (
    <View>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
    </View>
  );
};

export default SearchScreen;
