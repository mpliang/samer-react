import AppDispatcher from "../AppDispatcher"
import ActionTypes from  "../ActionTypes"

export default {
  receivedPosts(results) {
    console.log("3. Inside receivedPosts");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POSTS,
      data: results
    });
  },
  newPost(post) {
    console.log('inside DataActions.newPost');
    AppDispatcher.dispatch({
      actionType: ActionTypes.NEW_POST,
      data: post
    });
  }
}
