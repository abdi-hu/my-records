import React from "react";
import { Text, View, Image } from "react-native";

function DetailsScreen({ route, navigation }) {
	const {
		id,
		name,
		specialty,
		address,
		availability,
		phone,
		email,
		next_appoint,
		image,
		visits,
	} = route.params;
	const doctorVisits = visits.filter((visit) => visit.id == id);
	console.log(doctorVisits);
	return (
		<View style={{ height: "100%" }}>
			<View style={{ height: "25%" }}>
				<Image
					source={{ uri: image }}
					style={{ width: "100%", height: "100%" }}
				/>
			</View>
			<Text>Details Screen</Text>
			<Text>{id}</Text>
			<Text>{name}</Text>
			<Text>{specialty}</Text>
			<Text>{address}</Text>
			{doctorVisits.map((visit, id) => (
				<View>
					<Text key={id}>{visit.appoint_date}</Text>
					<Text>{visit.visit_summary}</Text>
				</View>
			))}
		</View>
	);
}

export default DetailsScreen;
