import { gql } from '@apollo/client';


export const Characters = gql`
query ($page:Int!){
  characters(page:$page) {
    info {
      count
      pages
    	next
    }
    results {
      name
      status
      species
      type
      gender
    }
  }
}`;