import { RootState } from "@/store";

export const selectChoosenUserId = (state: RootState) => state.users.choosenUserId;
export const selectIsUserCreating = (state: RootState) => state.users.isUserCreating;
export const selectUsersSearch = (state: RootState) => state.users.usersSearch;
