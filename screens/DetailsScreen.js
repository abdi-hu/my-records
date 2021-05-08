import React from "react";
import { Text, View } from "react-native";

function DetailsScreen({ route, navigation }) {
	const { id, name, specialty, address } = route.params;
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Details Screen</Text>
			<Text>{id}</Text>
			<Text>{name}</Text>
			<Text>{specialty}</Text>
			<Text>{address}</Text>
		</View>
	);
}

export default DetailsScreen;
