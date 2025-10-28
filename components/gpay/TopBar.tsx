import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from './SearchBar';

type TopBarProps = {
    onProfilePress?: () => void;
};

export function TopBar({ onProfilePress }: TopBarProps) {
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.searchWrap}>
                    <SearchBar />
                </View>
                <Pressable onPress={onProfilePress} hitSlop={8}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>P</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'transparent',
    },
    container: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchWrap: { flex: 1, marginRight: 12 },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#663399',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: { fontSize: 14, fontWeight: '600', color: '#fff' },
});

export default TopBar;
