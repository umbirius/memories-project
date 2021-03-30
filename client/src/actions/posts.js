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

// create post
export const createPost = (post) => async (dispatch) => {
    try{
        // create post api request to server
        const {data} = await api.createPost(post)
        dispatch({ type: 'CREATE', payload:data})
    }catch(error){
        console.log(error)
    }
}

// update post
export const updatePost = (id, post) => async (dispatch) => {
    try{
        // create post api request to server
        const {data} = await api.updatePost(id, post)
        dispatch({ type: 'UPDATE', payload:data})
    }catch(error){
        console.log(error)
    }
}


