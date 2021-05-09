import React, { useState } from "react";
import { Text, SafeAreaView, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useForm, Controller } from "react-hook-form";

function FormScreen({ route }) {
	const { handleAdd } = route.params;

	const [formState, setFormState] = useState({
		name: "",
		specialty: "",
		address: "",
		availability: "",
		phone: "",
		email: "",
	});
	function handleSubmit() {
		handleAdd(formState);
	}
	return (
		<SafeAreaView style={{ flex: 1, alignItems: "center" }}>
			<Input
				rightIcon={<Icon name="user-md" size={30} color="#87CEFA" />}
				label="Doctor Name"
				onChangeText={(value) =>
					setFormState((prevState) => ({
						...prevState,
						name: value,
					}))
				}
			/>
			<Input
				rightIcon={<Icon name="stethoscope" size={30} color="#87CEFA" />}
				label="Specialty"
				onChangeText={(value) =>
					setFormState((prevState) => ({
						...prevState,
						specialty: value,
					}))
				}
			/>
			<Input
				rightIcon={<Icon name="address-card" size={30} color="#87CEFA" />}
				label="Address"
				onChangeText={(value) =>
					setFormState((prevState) => ({
						...prevState,
						address: value,
					}))
				}
			/>
			<Input
				rightIcon={<Icon name="hourglass-start" size={30} color="#87CEFA" />}
				label="Office Hours"
				onChangeText={(value) =>
					setFormState((prevState) => ({
						...prevState,
						availability: value,
					}))
				}
			/>
			<Input
				rightIcon={<Icon name="phone" size={30} color="#87CEFA" />}
				label="Phone"
				onChangeText={(value) =>
					setFormState((prevState) => ({
						...prevState,
						phone: value,
					}))
				}
			/>
			<Input
				rightIcon={<Icon name="at" size={30} color="#87CEFA" />}
				label="Email"
				onChangeText={(value) =>
					setFormState((prevState) => ({
						...prevState,
						email: value,
					}))
				}
			/>
			<Button title="Add Doctor" onPress={handleSubmit} />
		</SafeAreaView>
	);
}

export default FormScreen;
