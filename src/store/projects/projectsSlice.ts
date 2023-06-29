import { Id } from "@/types/common";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProjectsState {
  choosenProjectId: Id | null;
  isProjectCreating: boolean;
}

const initialState: IProjectsState = {
  choosenProjectId: null,
  isProjectCreating: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setChoosenProjectId: (state, action: PayloadAction<Id>) => {
      state.choosenProjectId = action.payload;
      state.isProjectCreating = false;
    },
    setCreateMode: (state) => {
      state.isProjectCreating = true;
      state.choosenProjectId = null;
    },
  },
});

export const { reducer: projectsReducer, actions: projectsActions } = projectsSlice;
