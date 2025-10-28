import React from 'react';
import { Image, Pressable, StyleSheet, Text, ViewProps } from 'react-native';

type MerchantTileProps = ViewProps & {
    label: string;
    iconSource?: any;
    onPress?: () => void;
};

export function MerchantTile({ label, iconSource, onPress, style, ...rest }: MerchantTileProps) {
    return (
        <Pressable onPress={onPress} style={[styles.container, style]} {...rest}>
            <Image source={iconSource ?? require('@/assets/images/icon.png')} style={styles.icon} />
            <Text style={styles.label} numberOfLines={1}>
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', width: 88 },
    icon: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#F2F2F2' },
    label: { marginTop: 6, fontSize: 12, color: '#11181C', textAlign: 'center' },
});

export default MerchantTile;
