// action types
export const types = {
  LOAD_VEHICLES         : 'LOAD_VEHICLES',
  UPDATE_HIDDEN_VEHICLES: 'UPDATE_HIDDEN_VEHICLES',
};

// action creators
export const loadVehicles = (vehicles) => ({
  type: types.LOAD_VEHICLES,
  vehicles,
});

export const updateHiddenVehicles = (vehicleId) => ({
  type: types.UPDATE_HIDDEN_VEHICLES,
  vehicleId,
});
