import React from "react";
import { Text, SafeAreaView, TextInput } from "react-native";

function FormScreen() {
	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Form Screen</Text>
			<TextInput />
		</SafeAreaView>
	);
}

export default FormScreen;
