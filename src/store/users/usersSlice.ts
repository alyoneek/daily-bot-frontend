import { Id } from "@/types/common";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUsersState {
  choosenUserId: Id | null;
  isUserCreating: boolean;
}

const initialState: IUsersState = {
  choosenUserId: null,
  isUserCreating: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setChoosenUserId: (state, action: PayloadAction<string>) => {
      state.choosenUserId = action.payload;
      state.isUserCreating = false;
    },
    setCreateMode: (state) => {
      state.isUserCreating = true;
      state.choosenUserId = null;
    },
  },
});

export const { reducer: usersReducer, actions: usersActions } = usersSlice;
