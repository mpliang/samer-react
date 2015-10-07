import API from "../API";
import DataActions from "./DataActions";


export default {
  startFetchAll() {
    console.log("1. Inside the PostActions.startFetchAll");
    API.fetchPosts();
  },
  makeNewPost(post) {
    console.log('new post action: new post');
    DataActions.newPost(post);
  }
}
