import { configureStore } from "@reduxjs/toolkit";
import activUserReducer from "./activuser";
import commentspostReducer from "./comentsPosts";
import PostReducer from './postsSlice'
import mesijbazaReducer from './messijBaza'
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    activUser: activUserReducer,
    commentsPost: commentspostReducer,
    Posts:PostReducer,
    baza:mesijbazaReducer
  },
});
