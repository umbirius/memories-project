import * as api from "../api";

// Action creators
export const getPosts = () => async (dispatch) => {
  try{
      // get response from api
      const { data } = await api.fetchPosts()

      dispatch( {type: 'FETCH_ALL', payload: data })
  } catch (error) {
      console.log(error.message)
  }
};
