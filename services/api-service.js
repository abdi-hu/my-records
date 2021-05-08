const BASE_URL = "http://localhost:3000/";

function fetchDoctors() {
	return fetch(`${BASE_URL}doctors`).then((res) => res.json());
}
function fetchVisits() {
	return fetch(`${BASE_URL}visits`).then((res) => res.json());
}
export { fetchDoctors, fetchVisits };
