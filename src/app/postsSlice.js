import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);

  return array;
}
async function postscom() {
  const k = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return shuffle(k.data);
}
const initialState = await postscom();
export const PostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers:{

  },
});
export const {} = PostsSlice.actions;
export default PostsSlice.reducer;
