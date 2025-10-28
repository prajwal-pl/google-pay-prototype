import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';

type TagBadgeProps = ViewProps & {
    text: string;
    color?: string;
    textColor?: string;
};

export function TagBadge({ text, color = '#16a34a', textColor = '#fff', style, ...rest }: TagBadgeProps) {
    return (
        <View style={[styles.badge, { backgroundColor: color }, style]} {...rest}>
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: { borderRadius: 14, paddingHorizontal: 8, paddingVertical: 4 },
    text: { fontSize: 11, fontWeight: '600' },
});

export default TagBadge;
