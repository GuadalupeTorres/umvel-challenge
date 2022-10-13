import {
  GET_LIST_CHARACTERS,
  GET_LIST_CHARACTER_FILTER,
  GET_LIST_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR,
  CLEAN_LIST_CHARACTERS,
  SAVE_DETAIL_INDEX,
  NEXT_PAGE
} from '../constants';


import { client } from '@utils/api/apollo';
import { GET_CHARACTERS } from '@utils/api/queries/characters.queries';

export const getCharacters = (numberPage, filter) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_CHARACTERS });
    client.query({
      query: GET_CHARACTERS,
      variables: {
        page: filter ? 0 : numberPage,
        filter: { name: filter ?? '' }
      },
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'network-only'
    }).then(async (response) => {
      if (response.data) {
        
        if (filter) dispatch({ type: GET_LIST_CHARACTER_FILTER, payload: response?.data['characters']?.results });
        else dispatch({ type: GET_LIST_CHARACTERS_SUCCESS, payload: response?.data['characters']?.results });

        dispatch({ type: NEXT_PAGE, payload: response?.data['characters']?.info });
      }
    }).catch((error) => {
      dispatch({ type: CHARACTERS_ERROR, payload: error });
    })
  } catch (error) {
    console.log('error', error);
    dispatch({ type: CHARACTERS_ERROR, payload: error });
  }

};

export const cleanDataList = () => async (dispatch) => {
  return dispatch({ type: CLEAN_LIST_CHARACTERS })
};

export const saveDetailCharacters = (data) => async (dispatch) => {
  return dispatch({ type: SAVE_DETAIL_INDEX, payload: data });
};