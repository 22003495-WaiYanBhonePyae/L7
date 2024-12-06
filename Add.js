import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { tasks } from './Data';

const Add = ({ navigation }) => {
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('Not Completed');

    const addTask = () => {

        //for enhancement, if Task name is empty, alert message is displayed
        if (!task.trim()) {
            alert('Task name cannot be empty');
            return;
        }

        tasks.push({
            id: (tasks.length + 1).toString(),
            task,
            status,
        });

        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Task"
                value={task}
                onChangeText={setTask}
            />
            <Button
                title="Add as Not Completed"
                onPress={() => {
                    setStatus('Not Completed');
                    addTask();
                }}
                color="#007bff"
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

export default Add;
