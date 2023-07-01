import { RootState } from "@/store";

export const selectChoosenProjectId = (state: RootState) => state.projects.choosenProjectId;
export const selectIsProjectCreating = (state: RootState) => state.projects.isProjectCreating;
export const selectProjectsSearch = (state: RootState) => state.projects.projectsSearch;
