import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type RowItemProps = {
    title: string;
    subtitle?: string;
    icon: React.ComponentProps<typeof Ionicons>['name'];
    onPress?: () => void;
};

export function RowItem({ title, subtitle, icon, onPress }: RowItemProps) {
    return (
        <Pressable style={styles.row} onPress={onPress}>
            <View style={styles.left}>
                <View style={styles.iconWrap}>
                    <Ionicons name={icon} size={18} color="#3b82f6" />
                </View>
                <View style={{ gap: 2 }}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
                </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9BA1A6" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
        minWidth: 0,
    },
    iconWrap: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#EAF2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 15, color: '#11181C', fontWeight: '500' },
    subtitle: { fontSize: 12, color: '#687076' },
});

export default RowItem;
