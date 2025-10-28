import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function YouScreen() {
    return (
        <ThemedView style={styles.container}>
            <Text style={styles.title}>You</Text>
            <Text style={styles.subtitle}>Profile and settings</Text>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 24, fontWeight: '700', color: '#11181C' },
    subtitle: { marginTop: 6, color: '#687076' },
});
