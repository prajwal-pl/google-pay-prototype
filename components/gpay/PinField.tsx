import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type PinFieldProps = {
    length?: number;
    value: string;
    show?: boolean;
};

export function PinField({ length = 6, value, show = false }: PinFieldProps) {
    const chars = Array.from({ length }).map((_, i) => value[i] ?? '');
    return (
        <View style={styles.container}>
            {chars.map((ch, idx) => (
                <View key={idx} style={[styles.slot, (value.length === idx) && styles.active]}>
                    <Text style={styles.char}>{ch ? (show ? ch : '•') : ' '}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        paddingHorizontal: 24,
    },
    slot: {
        width: 32,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#C7CCD1',
        paddingBottom: 6,
    },
    active: {
        borderBottomColor: '#11181C',
    },
    char: {
        fontSize: 20,
        color: '#11181C',
        lineHeight: 24,
    },
});

export default PinField;
