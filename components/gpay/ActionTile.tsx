import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewProps } from 'react-native';

export type ActionTileProps = ViewProps & {
    label: string;
    icon: React.ComponentProps<typeof Ionicons>['name'];
    onPress?: () => void;
    variant?: 'default' | 'primary';
};

export function ActionTile({ label, icon, onPress, variant = 'default', style, ...rest }: ActionTileProps) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && styles.pressed, style]} {...rest}>
            <View style={[styles.iconWrap, variant === 'primary' && styles.primaryWrap]}>
                <Ionicons name={icon} size={22} color={variant === 'primary' ? '#fff' : '#0a7ea4'} />
            </View>
            <Text style={styles.label} numberOfLines={2}>
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.6,
    },
    iconWrap: {
        height: 52,
        width: 52,
        borderRadius: 26,
        backgroundColor: '#1d4ed8',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    primaryWrap: {
        height: 64,
        width: 64,
        borderRadius: 16,
        backgroundColor: '#2D63FF',
    },
    label: {
        fontSize: 12,
        textAlign: 'center',
        color: '#11181C',
    },
});

export default ActionTile;
