import {
  GET_LIST_CHARACTERS,
  GET_LIST_CHARACTER_FILTER,
  GET_LIST_CHARACTERS_SUCCESS,
  CHARACTERS_ERROR,
  CLEAN_LIST_CHARACTERS,
  SAVE_DETAIL_INDEX,
  NEXT_PAGE
} from '../constants';

export const initialState = {
  isLoadingData: false,
  showError: false,
  successData: false,
  dataCharacters: [],
  dataCharactersFilter: [],
  detailCharacterIndex: null,
  nextPage: 1,
  error: {},

};

export default charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CHARACTERS:
      return { ...state, isLoadingData: true, showError: false, successData: false };

    case GET_LIST_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoadingData: false,
        showError: false,
        successData: true,
        dataCharacters: action.payload,
        error: {},
      };
    case GET_LIST_CHARACTER_FILTER:
      return {
        ...state,
        isLoadingData: false,
        showError: false,
        dataCharactersFilter: action.payload,
        error: {},
      };

    case SAVE_DETAIL_INDEX:
      return {
        ...state,
        detailCharacterIndex: action.payload,
        error: {},
      };
    case NEXT_PAGE:
      return {
        ...state,
        nextPage: action.payload,
        error: {},
      };
    case CHARACTERS_ERROR:
      return {
        ...state,
        isLoadingData: false,
        successData: false,
        showError: true,
        error: action.payload,
      };
    case CLEAN_LIST_CHARACTERS:
      return {
        ...state,
        isLoadingData: false,
        showError: false,
        showErrorFile: false,
        successData: false,
        dataCharacters: [],
        detailCharacterIndex: null,
         dataCharactersFilter: [],
        nextPage: 1,
        error: {},
        errorFile: {}
      };

    default:
      return state;
  }
};
