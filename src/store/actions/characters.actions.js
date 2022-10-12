import {
  GET_LIST_CHARACTERS,
  GET_LIST_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR,
  CLEAN_LIST_CHARACTERS,
} from '../constants';


import { client } from '@utils/api/apollo';
import { GET_CHARACTERS } from '@utils/api/queries/characters.queries';

export const getCharacters = ({ numberPage }) => async (dispatch) => {
try {
  dispatch({ type: GET_LIST_CHARACTERS });
  client.query({
    query: GET_CHARACTERS,
    variables: {
      page: numberPage
    },
    fetchPolicy : 'network-only' ,  
    nextFetchPolicy : 'network-only'
  }).then(async (response) => {
    console.log('response',response);
    if (response.data) {
      dispatch({ type: GET_LIST_CHARACTERS_SUCCESS, payload: response?.data['characters']?.results });
    }
  }).catch((error) => {
    dispatch({ type: CHARACTERS_ERROR, payload: error });
  })
} catch (error) {
  console.log('error',error);
  dispatch({ type: CHARACTERS_ERROR, payload: error });
}

};

export const cleanDataList = () => async (dispatch) => {
  return dispatch({ type: CLEAN_LIST_CHARACTERS })
};