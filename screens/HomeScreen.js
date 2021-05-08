import React, { useState, useEffect } from "react";
import { Button, Text, View, FlatList, TouchableOpacity } from "react-native";
import { fetchDoctors } from "../services/api-service";

function HomeScreen({ navigation }) {
	const [doctorState, setDoctorState] = useState({ doctors: [] });

	async function getDoctors() {
		const doctors = await fetchDoctors();
		setDoctorState((prevState) => ({
			...prevState,
			doctors,
		}));
	}
	useEffect(() => {
		getDoctors();
	}, []);
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			{doctorState.doctors.map((doctor, id) => (
				<Button
					title={doctor.name}
					key={id}
					onPress={() =>
						navigation.navigate("Details", {
							id: doctor.id,
							name: doctor.name,
							speciality: doctor.specialty,
							address: doctor.address,
						})
					}
				/>
			))}
			<Button
				title="Add a doctor"
				onPress={() => navigation.navigate("Form", doctorState)}
			/>
		</View>
	);
}

export default HomeScreen;
