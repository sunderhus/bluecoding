import React from 'react';
import { useGiphy } from '../../contexts/giphys';
import { Container } from './styles';

const List: React.FC = () => {
  const { giphys } = useGiphy();

  return (
    <Container>
      <ul>
        {giphys?.map((giphy) => {
          return (
            <li key={giphy}>
              <img src={giphy} alt="some giphy"/>
            </li>
          );
        })}
      </ul>
    </Container>
  );

}


export default List;