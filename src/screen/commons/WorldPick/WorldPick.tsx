import "react-native-gesture-handler";

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

function WorldPicked() {
  const [country, setCountry] = useState('Unknown');

  return (
 <>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dialog" // Android only
        style={styles.picker}
       dropdownIconColor={"none"}
      >
        <Picker.Item label="Please select your country" value="Unknown" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Belgium" value="Belgium" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Japan" value="Japan" />
      </Picker>

  </>
  );
}

export default WorldPicked;

// Just some styles
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  picker: {
      color: "green",
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#c9e628",
  },
  pickerIcon: {
    color: "red",
    position: "absolute",
    bottom: 15,
    right: 10,
    fontSize: 20
 },
});
