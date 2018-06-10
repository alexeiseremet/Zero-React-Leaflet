import {types} from './actions';

// initial state
const initialState = {
  imgSrc: null,
};

const Dropzone = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_IMAGE_URL:
      return {
        ...state,
        imgSrc: action.url,
      };

    default:
      return state
  }
};

export default Dropzone
