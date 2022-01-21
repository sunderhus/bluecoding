import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import api from '../../services/api';
import Input from '../Input';
import { Container } from './styles';

const Form: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.get('/search', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_API_KEY,
        q: searchText
      }
    })
  }

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
  }, [])

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Search</legend>
          <Input onChange={handleChange} type="search" name="search" id="seach" />
        </fieldset>
      </form>
      {searchText}
    </Container>
  )
}

export default Form;