import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import DynamicForm from "@coffeebeanslabs/react-native-form-builder";

const basicFieldStyle = {
  backgroundColor: "#FFFFFF",
  borderColor: "#4B4A4F",
  borderRadius: 5,
};

const formTemplate = {
  data: [
    {
      component: "read-only-text",
      field_name: "firstSectionHeader",
      meta: {
        text: "1. Basic Details",
      },
      style: {
        fontSize: 18,
        fontWeight: "bold",
      },
    },
    {
      component: "input-text",
      field_name: "userid",
      is_mandatory: "true",
      meta: {
        label: "User ID",
        placeholder: "Enter a user ID",
      },
      style: { ...basicFieldStyle },
    },
    {
      component: "input-text",
      field_name: "name",
      is_mandatory: "true",
      meta: {
        label: "Name",
        placeholder: "Enter a name",
      },
      style: { ...basicFieldStyle },
    },
    {
      component: "input-dropdown",
      field_name: "gender",
      is_mandatory: "true",
      meta: {
        text: "Gender",
        items: [
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Female",
            value: "female",
          },
        ],
      },
      style: { ...basicFieldStyle },
    },
    {
      component: "input-text",
      field_name: "aadhaar_number",
      is_mandatory: "true",
      meta: {
        label: "Aadhaar ID",
        placeholder: "Enter your Aadhaar number",
      },
      style: { ...basicFieldStyle },
    },
    {
      component: "input-date",
      field_name: "birthDate",
      is_mandatory: "true",
      meta: {
        title: "Birth Date",
      },
      style: {},
    },
    {
      component: "input-dropdown",
      field_name: "category",
      is_mandatory: "true",
      meta: {
        text: "Social Category",
        items: [
          {
            label: "General",
            value: "general",
          },
          {
            label: "SC",
            value: "sc",
          },
          {
            label: "ST",
            value: "st",
          },
          {
            label: "OBC",
            value: "obc",
          },
        ],
      },
      style: { ...basicFieldStyle },
    },
    {
      component: "input-radio",
      field_name: "disability",
      is_mandatory: "true",
      meta: {
        text: "Disability",
        data: [
          {
            label: "Yes",
            value: "yes",
          },
          {
            label: "No",
            value: "no",
          },
        ],
      },
      style: { ...basicFieldStyle },
    },
  ],
};

export default function TabOneScreen() {
  const onSubmit = (formFields: any) => {
    // Actions on submit button click.
    console.log("Form submitted with fields: ", formFields);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Wage Seeker</Text>
      <ScrollView style={styles.form}>
        <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    padding: 15,
  },
  form: {
    width: "100%",
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: "#FFF9F7",
  },
  field: {
    backgroundColor: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
