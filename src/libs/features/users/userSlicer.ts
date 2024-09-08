import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState extends IUser {
	logged: boolean;
}

const initialState: UserState = {
	_id: "",
	usr_email: "",
	usr_name: "",
	usr_avatar: "",
	usr_slug: "",
	usr_status: "",
	logged: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setStatusAuth: (state: UserState, { payload }: PayloadAction<ILogin>) => {
			state._id = payload.user._id;
			state.logged = true;
			state.usr_email = payload.user.usr_email;
			state.usr_name = payload.user.usr_name;
		},
	},
});

export const { setStatusAuth } = userSlice.actions;

export default userSlice.reducer;
