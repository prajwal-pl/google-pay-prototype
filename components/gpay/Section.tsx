import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type SectionProps = {
    title: string;
    actionText?: string;
    onActionPress?: () => void;
    children?: React.ReactNode;
    spacing?: 'none' | 'sm' | 'md' | 'lg';
};

export function Section({ title, actionText, onActionPress, children, spacing = 'md' }: SectionProps) {
    return (
        <View style={[styles.container, spacing === 'sm' && styles.sm, spacing === 'lg' && styles.lg]}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {actionText ? (
                    <Pressable onPress={onActionPress} hitSlop={8}>
                        <Text style={styles.action}>{actionText}</Text>
                    </Pressable>
                ) : null}
            </View>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { gap: 12, marginTop: 16 },
    sm: { marginTop: 8 },
    lg: { marginTop: 24 },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    title: { fontSize: 16, fontWeight: '600', color: '#11181C' },
    action: { fontSize: 13, color: '#0a7ea4', fontWeight: '500' },
});

export default Section;
