const BASE_URL = "https://my-doctors-api.herokuapp.com/";

function fetchDoctors() {
	return fetch(`${BASE_URL}doctors`).then((res) => res.json());
}
function fetchVisits() {
	return fetch(`${BASE_URL}visits`).then((res) => res.json());
}
function createDoctor(data) {
	return fetch(`${BASE_URL}doctors`, {
		method: "POST",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => res.json());
}
function createVisit(data) {
	return fetch(`${BASE_URL}visits`, {
		method: "POST",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => res.json());
}
export { fetchDoctors, fetchVisits, createDoctor, createVisit };
