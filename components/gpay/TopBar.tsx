import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type TopBarProps = {
    onProfilePress?: () => void;
};

export function TopBar({ onProfilePress }: TopBarProps) {
    return (
        <View style={styles.container}>
            <Pressable hitSlop={8}>
                <Ionicons name="scan-outline" size={22} color="#11181C" />
            </Pressable>
            <Image
                source={require('@/assets/design/G Pay.png')}
                style={{ width: 74, height: 22 }}
                resizeMode="contain"
            />
            <Pressable onPress={onProfilePress} hitSlop={8}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>P</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E6F4F9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: { fontSize: 14, fontWeight: '600', color: '#0a7ea4' },
});

export default TopBar;
