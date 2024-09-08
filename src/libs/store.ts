import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";

import userReducer from "@/libs/features/users/userSlicer";
import navigationReducer from "@/libs/features/navigation/navigationSlice";
const reducer = combineReducers({
	navigation: navigationReducer,
	user: userReducer,
});

export const createStore = (preloadedState?: any) => {
	return configureStore({
		reducer,
		preloadedState,
	});
};
// const store = createStore();
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
