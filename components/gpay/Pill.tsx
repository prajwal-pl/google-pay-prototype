import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';

type PillProps = ViewProps & {
    text: string;
    icon?: React.ComponentProps<typeof Ionicons>['name'];
    variant?: 'solid' | 'dashed';
};

export function Pill({ text, icon, variant = 'solid', style, ...rest }: PillProps) {
    return (
        <View style={[styles.base, variant === 'dashed' ? styles.dashed : styles.solid, style]} {...rest}>
            {icon ? <Ionicons name={icon} size={14} color={variant === 'dashed' ? '#9BA1A6' : '#fff'} /> : null}
            <Text style={[styles.text, variant === 'dashed' ? styles.textMuted : styles.textSolid]} numberOfLines={1}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        height: 34,
        paddingHorizontal: 12,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    dashed: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#6B7280',
    },
    solid: {
        backgroundColor: '#3A3F46',
    },
    text: { fontSize: 13 },
    textMuted: { color: '#9BA1A6' },
    textSolid: { color: '#E5E7EB' },
});

export default Pill;
