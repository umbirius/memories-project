import * as api from "../api";

// Action creators
export const getPosts = () => async (dispatch) => {
  try {
    // get response from api
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// create post
export const createPost = (post) => async (dispatch) => {
  try {
    // create post api request to server
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// update post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    // create post api request to server
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error); // error gives more info than error.message
  }
};

// delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    // no need to const because we do not need any return data, only deleting
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

// like post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ tyoe: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
