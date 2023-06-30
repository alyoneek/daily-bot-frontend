import { usersApi } from "@/services/usersApi";
import { Id } from "@/types/common";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUsersState {
  choosenUserId: Id | null;
  isUserCreating: boolean;
  usersSearch: string;
}

const initialState: IUsersState = {
  choosenUserId: null,
  isUserCreating: false,
  usersSearch: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setChoosenUserId: (state, action: PayloadAction<Id>) => {
      state.choosenUserId = action.payload;
      state.isUserCreating = false;
    },
    setCreateMode: (state) => {
      state.isUserCreating = true;
      state.choosenUserId = null;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.usersSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(usersApi.endpoints.deleteUser.matchFulfilled, (state) => {
      state.choosenUserId = null;
    });
  },
});

export const { reducer: usersReducer, actions: usersActions } = usersSlice;
