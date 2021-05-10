import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import {
	fetchDoctors,
	fetchVisits,
	createDoctor,
} from "../services/api-service";
import { Button, Avatar, ListItem, Tile, Tab } from "react-native-elements";

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
	async function handleAdd(formInput) {
		const doctors = await createDoctor(formInput);
		setDoctorState((prevState) => ({
			...prevState,
			doctors,
		}));
	}
	useEffect(() => {
		getDoctors();
		getVisits();
	}, []);

	// doctorVisits = visits.filter((visit) => visit.id == id);
	// console.log(doctorVisits);
	return (
		<ScrollView>
			<Tile
				imageSrc={{
					uri:
						"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",
				}}
				title="Welcome 'Name'"
				featured
				resizeMode="cover"
			/>
			{doctorState.doctors.map((doctor, id) => {
				const doctorVisits = visitState.visits.filter(
					(visit) => visit.doctor_id == doctor.id
				);
				return (
					<ListItem
						key={id}
						bottomDivider
						topDivider
						onPress={() =>
							navigation.navigate("Details", {
								id: doctor.id,
								name: doctor.name,
								specialty: doctor.specialty,
								address: doctor.address,
								availability: doctor.availability,
								phone: doctor.phone,
								email: doctor.email,
								next_appont: doctor.next_appont,
								image: doctor.image,
								visits: visitState.visits,
							})
						}
					>
						<Avatar source={{ uri: doctor.image }} />

						<ListItem.Title>{doctor.name}</ListItem.Title>
						<ListItem.Subtitle>{doctor.specialty}</ListItem.Subtitle>

						<ListItem.Chevron />
					</ListItem>
				);
			})}
			<Button
				title="Add a doctor"
				type="outline"
				raised
				onPress={() => navigation.navigate("Form", { handleAdd })}
			/>
		</ScrollView>
	);
}

export default HomeScreen;

{
	/* <Button
							title={doctor.name}
							key={id}
							onPress={() =>
								navigation.navigate("Details", {
									id: doctor.id,
									name: doctor.name,
									specialty: doctor.specialty,
									address: doctor.address,
									availability: doctor.availability,
									phone: doctor.phone,
									email: doctor.email,
									next_appont: doctor.next_appont,
									image: doctor.image,
									visits: visitState.visits,
								})
							}
						/> */
}
