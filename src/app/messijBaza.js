import { createSlice } from "@reduxjs/toolkit";
const baza = {};

const mesijbaza = createSlice({
  name: "baza",
  initialState: {
    baza,
  },
  reducers: {
    avelacnelBaz: (state, { payload }) => {
      let id = payload.id;
      let texte = payload.text;
      if (!localStorage.getItem("baza")) {
        if (!state.baza.hasOwnProperty(id)) {
          state.baza[id] = [];
          state.baza[id].push(texte);
        } else {
          state.baza[id].push(texte);
        }
        localStorage.setItem("baza", JSON.stringify(state.baza));
      } else {
        state.baza = JSON.parse(localStorage.getItem("baza"));
        if (!state.baza.hasOwnProperty(id)) {
          state.baza[id] = [];
          state.baza[id].push(texte);
        } else {
          state.baza[id].push(texte);
        }
        localStorage.setItem("baza", JSON.stringify(state.baza));
      }
    },
    messigdelet: (state, { payload }) => {
      const id = payload.userID;
      const messigID = payload.messigID;
      for (let i = 0; i < state.baza[id].length; i++) {
        if (state.baza[id][i].messigID === messigID) {
          state.baza[id].splice(i, 1);
        }
      }
      localStorage.setItem("baza", JSON.stringify(state.baza));
    },
    poxelmessij: (state, { payload }) => {
      const id = payload.id;
      const messigID = payload.messigID;
      const tazatext = payload.text;
      for (let i = 0; i < state.baza[id].length; i++) {
        if (state.baza[id][i].messigID === messigID) {
          state.baza[id][i].messig = tazatext;
        }
      }
      localStorage.setItem("baza", JSON.stringify(state.baza));
    },
  },
});

export const { avelacnelBaz, messigdelet, poxelmessij } = mesijbaza.actions;
export default mesijbaza.reducer;
