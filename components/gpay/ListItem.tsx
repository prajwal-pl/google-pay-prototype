import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type ListItemProps = {
    title: string;
    subtitle?: string;
    amount?: string;
    iconSource?: any; // require('path')
};

export function ListItem({ title, subtitle, amount, iconSource }: ListItemProps) {
    return (
        <View style={styles.row}>
            <View style={styles.left}>
                <Image source={iconSource} style={styles.avatar} resizeMode="cover" />
                <View style={styles.texts}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    {!!subtitle && (
                        <Text style={styles.subtitle} numberOfLines={1}>
                            {subtitle}
                        </Text>
                    )}
                </View>
            </View>
            {!!amount && <Text style={styles.amount}>{amount}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    left: { flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 },
    avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#EEE' },
    texts: { gap: 2, flex: 1, minWidth: 0 },
    title: { fontSize: 14, color: '#11181C', fontWeight: '500' },
    subtitle: { fontSize: 12, color: '#687076' },
    amount: { fontSize: 14, color: '#11181C', fontWeight: '600' },
});

export default ListItem;
