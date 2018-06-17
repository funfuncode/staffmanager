import * as actiontypes from './actiontypes';

export const updateEmployee = ({ prop, value }) => {
    return {
      type: actiontypes.UPDATE_EMPLOYEE,
      payload: { prop, value }
    }
};
