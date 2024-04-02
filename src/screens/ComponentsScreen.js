import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    // return <Text style={styles.textStyle}>This is the components screen</Text>;
    const greeting = <Text>Hello to you!</Text>;
    const name = 'Sajeet';
    return (
        <View>
            <Text style={{ fontSize: 20 }}>This is the components screen</Text>
            {greeting}
            <Text style={styles.textStyle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});

export default ComponentsScreen;