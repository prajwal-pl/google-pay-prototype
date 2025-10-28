import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type PromoBannerProps = {
    title: string;
    cta?: string;
    image?: ImageSourcePropType;
};

export function PromoBanner({ title, cta = 'Check now', image }: PromoBannerProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.ctaRow}>
                <Text style={styles.cta}>{cta}</Text>
                <Text style={styles.ctaArrow}>→</Text>
            </View>
            {image ? (
                <Image source={image} style={styles.art} resizeMode="contain" />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E232B',
        borderRadius: 16,
        padding: 16,
        overflow: 'hidden',
        minHeight: 120,
    },
    title: { color: '#fff', fontSize: 18, fontWeight: '700', maxWidth: '70%' },
    ctaRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 12 },
    cta: { color: '#93c5fd', fontWeight: '700' },
    ctaArrow: { color: '#93c5fd', fontWeight: '700' },
    art: { position: 'absolute', right: -10, bottom: -4, width: 160, height: 120 },
});

export default PromoBanner;
