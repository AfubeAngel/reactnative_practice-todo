import { Text, View, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}
    >
        <Text style={styles.header}>My Todos</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'coral',
    paddingVertical: 28,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
