const reducer = (state = null, action) => {
	switch (action.type) {
		case "AUTH_STUDENT":
			return 1;
		case "AUTH_ADMIN":
			return 2;
		case "AUTH_FAIL":
			return 0;
		default:
			return state;
	}
};
export default reducer;
