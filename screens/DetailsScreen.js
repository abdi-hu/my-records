import React from "react";
import { Text, View } from "react-native";
import { Card, ListItem } from "react-native-elements";

function DetailsScreen({ route }) {
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

	return (
		<View style={{ height: "100%" }}>
			<Card>
				<Card.Image
					source={{
						uri: image,
					}}
					resizeMode="center"
				></Card.Image>
				<Card.Divider />
				<Card.Title>{name}</Card.Title>
				<Card.Divider />
				<Card.FeaturedTitle>Featured Title</Card.FeaturedTitle>
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<Text>{specialty}</Text>
					<Text>{phone}</Text>
					<Text>{email}</Text>
					<Text>{availability}</Text>
					<Text>Next Appointment:{next_appoint}</Text>
					<Text>{address}</Text>
				</View>
			</Card>

			<ListItem>
				{doctorVisits.map((visit, id) => (
					<View key={id}>
						<ListItem.Title>{visit.appoint_date}</ListItem.Title>
						<ListItem.Subtitle>{visit.visit_summary}</ListItem.Subtitle>
					</View>
				))}
			</ListItem>
		</View>
	);
}

export default DetailsScreen;
