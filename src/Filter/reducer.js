import {types} from './actions';

// initial state
const initialState = {
  vehicles      : [],
  hiddenVehicles: [],
  isLoading     : true
};

const Filter = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_VEHICLES:
      return {
        ...state,
        vehicles : action.vehicles,
        isLoading: false,
      };

    case types.UPDATE_HIDDEN_VEHICLES:
      const {hiddenVehicles} = state;
      const index = hiddenVehicles.indexOf(action.vehicleId);

      index > -1
        ? hiddenVehicles.splice(index, 1)
        : hiddenVehicles.push(action.vehicleId);

      return {...state, hiddenVehicles};

    default:
      return state
  }
};

export default Filter
