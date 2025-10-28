import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, ViewProps } from 'react-native';

type AvatarTileProps = ViewProps & {
    label: string;
    uri?: string;
    fallback?: string; // first letter
    onPress?: () => void;
};

export function AvatarTile({ label, uri, fallback, onPress, style, ...rest }: AvatarTileProps) {
    const initial = fallback ?? label.charAt(0).toUpperCase();
    return (
        <Pressable onPress={onPress} style={[styles.container, style]} {...rest}>
            {uri ? (
                <Image source={{ uri }} style={styles.avatar} />
            ) : (
                <View style={[styles.avatar, styles.fallbackBg]}>
                    <Text style={styles.initial}>{initial}</Text>
                </View>
            )}
            <Text style={styles.label} numberOfLines={1}>
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: { width: 72, alignItems: 'center', gap: 6 },
    avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#E6F4F9' },
    fallbackBg: { alignItems: 'center', justifyContent: 'center' },
    initial: { fontSize: 16, fontWeight: '600', color: '#3b82f6' },
    label: { fontSize: 11, color: '#11181C' },
});

export default AvatarTile;
