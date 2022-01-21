import styled from 'styled-components';

export const Container = styled.div`
  ul{
    display: grid;
    grid-template-columns: repeat(2, minmax(45rem, auto));
    gap: 2rem;
    margin-top: 4rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        filter: opacity(0.87);
      }
      img {
        width: 16rem;
        height: 16rem;
        border-radius: 0.8rem;
      }
    }

  }
`;