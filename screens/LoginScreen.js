import React from "react";
import { Text, SafeAreaView, TextInput } from "react-native";

function LoginScreen() {
	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Login Screen</Text>
			<TextInput />
		</SafeAreaView>
	);
}

export default LoginScreen;
