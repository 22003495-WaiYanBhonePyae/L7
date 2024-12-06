import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { tasks } from './Data';

const Edit = ({ navigation, route }) => {
    const { index } = route.params; // Access the task index directly
    const task = tasks[index]; // Access the task using the index

    const [taskName, setTaskName] = useState(task.task); // Task name state
    const [status, setStatus] = useState(task.status); // Task status state

    const saveTask = () => {
        // Note for revision: to update tasks array after saving :)
        task.task = taskName; //Note: set the task name after saving
        task.status = status; //Note: set the status after saving
        navigation.navigate('Home'); // to Navigate back to the Home screen
    };

    const markAsCompleted = () => {
        setStatus('Completed'); // Update local status state
        task.status = 'Completed'; // Update the task in the tasks array
        navigation.navigate('Home'); // Navigate back to the Home screen
    };

    const deleteTask = () => {
        Alert.alert('Confirm Delete', 'Are you sure you want to delete this task?', [
            { text: 'Cancel' },
            {
                text: 'Delete',
                onPress: () => {
                    tasks.splice(index, 1); // Remove the task from the array
                    navigation.navigate('Home'); // Navigate back to Home
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            {/* TextInput for editing the task name */}
            <TextInput
                style={styles.input}
                value={taskName}
                onChangeText={setTaskName}
            />

            {/* Button to mark the task as completed */}
            <Button
                title="Mark as Completed"
                onPress={markAsCompleted} // Call the markAsCompleted function
                color="#007bff"
            />

            {/* Button to delete the task */}
            <Button
                title="Delete Task"
                onPress={deleteTask}
                color="red"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 8,
        borderRadius: 5,
    },
});

export default Edit;
