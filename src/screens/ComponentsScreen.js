import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    // return <Text style={styles.textStyle}>This is the components screen</Text>;
    return <Text style={{ fontSize: 20 }}>This is the components screen</Text>;
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});

export default ComponentsScreen;