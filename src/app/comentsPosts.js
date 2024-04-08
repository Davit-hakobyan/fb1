import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const commentspost = createSlice({
  name: "commentsPost",
  initialState,
  reducers: {
    addcomment: (state, { payload }) => {
      state.push({
        id: new Date().getTime().toString(),
        postID: payload.postID,
        userID: payload.userID,
        comment: payload.comment,
      });

      return state;
    },
  },
});

export const { addcomment } = commentspost.actions;
export default commentspost.reducer;
