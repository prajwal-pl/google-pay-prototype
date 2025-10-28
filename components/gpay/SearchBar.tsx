import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type SearchBarProps = {
    placeholder?: string;
    onPress?: () => void;
};

export function SearchBar({ placeholder = 'Pay anyone on UPI', onPress }: SearchBarProps) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Ionicons name="search" size={18} color="#9BA1A6" />
            <Text style={styles.placeholder}>{placeholder}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#272B33',
        paddingHorizontal: 14,
        height: 44,
        borderRadius: 22,
    },
    placeholder: { color: '#9BA1A6', fontSize: 14 },
});

export default SearchBar;
