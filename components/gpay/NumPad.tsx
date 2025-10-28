import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type NumPadProps = {
    onKeyPress: (key: string | 'back' | 'submit') => void;
};

export function NumPad({ onKeyPress }: NumPadProps) {
    const rows = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
    ];
    return (
        <View style={styles.container}>
            {rows.map((r, i) => (
                <View key={i} style={styles.row}>
                    {r.map((k) => (
                        <Pressable key={k} style={styles.key} onPress={() => onKeyPress(k)}>
                            <Text style={styles.keyText}>{k}</Text>
                        </Pressable>
                    ))}
                </View>
            ))}
            <View style={styles.row}>
                <Pressable style={styles.key} onPress={() => onKeyPress('back')}>
                    <Text style={[styles.keyText]}>⌫</Text>
                </Pressable>
                <Pressable style={styles.key} onPress={() => onKeyPress('0')}>
                    <Text style={styles.keyText}>0</Text>
                </Pressable>
                <Pressable style={[styles.key]} onPress={() => onKeyPress('submit')}>
                    <View style={styles.submitCircle}>
                        <Text style={styles.submitCheck}>✓</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        paddingBottom: 12,
        paddingHorizontal: 32,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    key: {
        width: 80,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyText: {
        fontSize: 28,
        color: '#1F2A44',
    },
    submitCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#1E3A8A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitCheck: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '700',
    },
});

export default NumPad;
