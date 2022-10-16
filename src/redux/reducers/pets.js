import {
  GET_ALL_PETS,
  GET_PETS_BY_CATEGORY,
  SET_PETS_LOADER,
  GET_PET_BY_ID,
} from "../actionTypes/pets";

const initialState = {
  allPets: [],
  petsLoader: false,
  petsByCategory: [],
  selectedPet: {},
};

const petsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PETS:
      return {
        ...state,
        allPets: payload,
      };

    case GET_PETS_BY_CATEGORY:
      return {
        ...state,
        petsByCategory: payload,
      };

    case GET_PET_BY_ID:
      return {
        ...state,
        selectedPet: payload,
      };

    case SET_PETS_LOADER:
      return {
        ...state,
        petsLoader: payload,
      };

    default:
      return state;
  }
};

export default petsReducer;
