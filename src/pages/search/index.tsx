import React from 'react'
import Form from '../../components/Form';
import List from '../../components/List';
import { GiphyProvider } from '../../contexts/giphys';
import { Container } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <GiphyProvider>
        <Form />
        <List />
      </GiphyProvider>
    </Container>
  )
}

export default Search;