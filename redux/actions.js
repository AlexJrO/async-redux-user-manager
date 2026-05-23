export const FETCH_USERS_LOADING = "FETCH_USERS_LOADING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const DELETE_USER = "DELETE_USER";


// Async thunk
export const fetchUsers = () => async (dispatch) => {

  dispatch({
    type: FETCH_USERS_LOADING
  });

  try {

    const response =
      await fetch("https://randomuser.me/api/?results=20");

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: data.results
    });

  } catch (error) {

    dispatch({
      type: FETCH_USERS_ERROR,
      payload: error.message
    });
  }
};


// Sync action
export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id
});