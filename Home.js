import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { tasks } from './Data';

const Home = ({ navigation }) => {
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Edit', { index })} // Pass the index
        >
            <Text style={styles.itemText}>{item.task} - {item.status}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={styles.buttonContainer}>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <Button
                    title="ADD TASK"
                    onPress={() => navigation.navigate('Add')}
                    color="#007bff"
            />
            <View style={styles.buttonSpacing} />
            <Button
                    title="OVERALL STATUS"
                    onPress={() => {
                        let completedTasks = 0; // set the complete task to 0
                        for (let i = 0; i < tasks.length; i++) {
                            if (tasks[i].status === 'Completed') {
                                completedTasks++;
                            }
                        }

                        const totalTasks = tasks.length; // Total number of tasks
                        let percentage = 0; // Set the percentage to 0
                        if (totalTasks > 0) {
                            percentage = Math.round(((completedTasks / totalTasks) * 100) * 100) / 100; // Round to 2 decimal places
                        }
                        alert(
                            'Completed Tasks: ' + completedTasks + '\n' +
                            'Incomplete Tasks: ' + (totalTasks - completedTasks) + '\n' +
                            percentage + '%' + ' of tasks complete'
                        );


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
    itemContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
    },
    buttonContainer: {
        padding: 10,
    },
    buttonSpacing: {
        height: 10, // Add vertical space between buttons
    },
});

export default Home;
