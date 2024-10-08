import decode from "jwt-decode";

import cookie from "./cookie.js";

const jwt = {
	getToken: () => cookie.get("_sgarden"),
	setToken: (token) => token && cookie.set("_sgarden", token),
	destroyToken: () => {
		cookie.remove("_sgarden");
	},
	isAuthenticated: () => {
		const token = cookie.get("_sgarden");
		return token && token !== "undefined";
	},
	decode: () => {
		const token = cookie.get("_sgarden");
		if (token) return decode(token);
		cookie.remove("_mycookie");
		window.location.href = "/";
		return null;
	},
};

export default jwt;
