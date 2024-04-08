import { createSlice } from "@reduxjs/toolkit";



const activUser = "";

export const activUserSlice = createSlice({
  name: "activUser",
  initialState: activUser,
  reducers: {
    activ: (state, { payload }) => {
      state = payload;

      return state;
    },
    sarqelrtu:(state)=>{
      state.activ=true
    }
    
  },
});

export const { activ , sarqelrtu} = activUserSlice.actions;

export default activUserSlice.reducer;
