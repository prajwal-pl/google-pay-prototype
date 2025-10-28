import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewProps } from 'react-native';

export type ActionTileProps = ViewProps & {
    label: string;
    icon: React.ComponentProps<typeof Ionicons>['name'];
    onPress?: () => void;
};

export function ActionTile({ label, icon, onPress, style, ...rest }: ActionTileProps) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && styles.pressed, style]} {...rest}>
            <View style={styles.iconWrap}>
                <Ionicons name={icon} size={22} color="#0a7ea4" />
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
        width: 84,
    },
    pressed: {
        opacity: 0.6,
    },
    iconWrap: {
        height: 52,
        width: 52,
        borderRadius: 26,
        backgroundColor: '#E6F4F9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    label: {
        fontSize: 12,
        textAlign: 'center',
        color: '#11181C',
    },
});

export default ActionTile;
