export const FETCH_USERS = 'FETCH_USERS';

//This params from redux thunk middleware, the third params its axios instance that we passed before.
export const fetchUsers = () => async (dispatch, getState, api) => {
  const responses = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: responses
  });
};

export const GET_UID = 'GET_UID';

export const getUserUid = () => (dispatch, getState, uid) => {
  dispatch({
    type: GET_UID,
    payload: GET_UID,
  })
}

export const FETCH_ADMINS = 'FETCH_ADMINS';

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const responses = await api.get('/admins');
  dispatch({
    type: FETCH_ADMINS,
    payload: responses
  });
};
