import React, { useState, useEffect } from "react";
import { Button, Text, View, FlatList, TouchableOpacity } from "react-native";
import { fetchDoctors, fetchVisits } from "../services/api-service";

function HomeScreen({ navigation }) {
	const [doctorState, setDoctorState] = useState({ doctors: [] });
	const [visitState, setVisitState] = useState({ visits: [] });

	async function getDoctors() {
		const doctors = await fetchDoctors();
		setDoctorState((prevState) => ({
			...prevState,
			doctors,
		}));
	}
	async function getVisits() {
		const visits = await fetchVisits();
		setVisitState((prevState) => ({
			...prevState,
			visits,
		}));
	}

	useEffect(() => {
		getDoctors();
		getVisits();
	}, []);

	// doctorVisits = visits.filter((visit) => visit.id == id);
	// console.log(doctorVisits);
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			{doctorState.doctors.map((doctor, id) => {
				const doctorVisits = visitState.visits.filter(
					(visit) => visit.id == id
				);
				return (
					<Button
						title={doctor.name}
						key={id}
						onPress={() =>
							navigation.navigate("Details", {
								id: doctor.id,
								name: doctor.name,
								speciality: doctor.specialty,
								address: doctor.address,
								availability: doctor,
								phone: doctor.phone,
								email: doctor.email,
								next_appont: doctor.next_appont,
								image: doctor.image,
								visits: visitState.visits,
							})
						}
					/>
				);
			})}
			<Button
				title="Add a doctor"
				onPress={() => navigation.navigate("Form", doctorState)}
			/>
		</View>
	);
}

export default HomeScreen;
