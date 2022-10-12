import { gql } from '@apollo/client';


export const GET_CHARACTERS = gql`
query getCharacters{
  characters {
    results {
      name
      status
      species
      gender
      image
    }
  }
}`;