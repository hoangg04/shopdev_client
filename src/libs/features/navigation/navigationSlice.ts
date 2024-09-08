import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
	isTouchSearch: boolean;
	isTouchNotification: boolean;
	isTouchCart: boolean;
	isTouchProfile: boolean;
	isTouchFavorite: boolean;
	currentTouch:
		| "isTouchSearch"
		| "isTouchNotification"
		| "isTouchCart"
		| "isTouchProfile"
		| "isTouchFavorite"
		| null;
}

const initialState: NavigationState = {
	isTouchSearch: false,
	isTouchNotification: false,
	isTouchCart: false,
	isTouchProfile: false,
	isTouchFavorite: false,
	currentTouch: null,
};

const navigationSlice = createSlice({
	name: "navigationTouch",
	initialState,
	reducers: {
		touchSearch: (state: NavigationState) => {
			if (state.currentTouch && state.currentTouch !== "isTouchSearch") {
				state[state.currentTouch] = false;
			}
			state.isTouchSearch = !state.isTouchSearch;
			state.currentTouch = state.isTouchSearch ? "isTouchSearch" : null;
		},

		touchNotification: (state: NavigationState) => {
			if (state.currentTouch && state.currentTouch !== "isTouchNotification") {
				state[state.currentTouch] = false;
			}
			state.isTouchNotification = !state.isTouchNotification;
			state.currentTouch = state.isTouchNotification ? "isTouchNotification" : null;
		},
		touchCart: (state: NavigationState) => {
			if (state.currentTouch && state.currentTouch !== "isTouchCart") {
				state[state.currentTouch] = false;
			}
			state.isTouchCart = !state.isTouchCart;
			state.currentTouch = state.isTouchCart ? "isTouchCart" : null;
		},
		touchProfile: (state: NavigationState) => {
			if (state.currentTouch && state.currentTouch !== "isTouchProfile") {
				state[state.currentTouch] = false;
			}
			state.isTouchProfile = !state.isTouchProfile;
			state.currentTouch = state.isTouchProfile ? "isTouchProfile" : null;
		},
		touchFavorite: (state: NavigationState) => {
			if (state.currentTouch && state.currentTouch !== "isTouchFavorite") {
				state[state.currentTouch] = false;
			}
			state.isTouchFavorite = !state.isTouchFavorite;
			state.currentTouch = state.isTouchFavorite ? "isTouchFavorite" : null;
		},
	},
});

export const { touchCart, touchNotification, touchProfile, touchSearch, touchFavorite } =
	navigationSlice.actions;

export default navigationSlice.reducer;
