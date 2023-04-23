import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyBoardSafeView";

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <AppBar></AppBar>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input}></TextInput>
      </View>
      <CircleButton name="check"></CircleButton>
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});