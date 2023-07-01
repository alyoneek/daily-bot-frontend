import { projectsApi } from "@/services/projectsApi";
import { Id } from "@/types/common";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProjectsState {
  choosenProjectId: Id | null;
  isProjectCreating: boolean;
  projectsSearch: string;
}

const initialState: IProjectsState = {
  choosenProjectId: null,
  isProjectCreating: false,
  projectsSearch: "",
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.projectsSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(projectsApi.endpoints.deleteProject.matchFulfilled, (state) => {
      state.choosenProjectId = null;
    });
  },
});

export const { reducer: projectsReducer, actions: projectsActions } = projectsSlice;
