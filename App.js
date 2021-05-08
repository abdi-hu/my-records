import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FormScreen from "./screens/FormScreen";

export default function App() {
	const Stack = createStackNavigator();

	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ title: "Overview" }}
					/>
					<Stack.Screen name="Details" component={DetailsScreen} />
					<Stack.Screen name="Form" component={FormScreen} />
				</Stack.Navigator>
			</NavigationContainer>

			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "powderblue",
	},
});
