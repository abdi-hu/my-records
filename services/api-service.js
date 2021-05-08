const BASE_URL = "http://localhost:3000/doctors";

function fetchDoctors() {
	return fetch(BASE_URL).then((res) => res.json());
}
export { fetchDoctors };
