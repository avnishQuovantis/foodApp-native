import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
// import scrol

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })
  }
  // console.log('results ', results.filter(result => result.price == '$'));
  return (
    < >
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>

        <ResultsList

          results={filterResultByPrice('$')}
          title="Cost Effective" />
        <ResultsList
          results={filterResultByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
