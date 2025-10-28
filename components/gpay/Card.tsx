import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type CardProps = ViewProps & {
    elevated?: boolean;
    rounded?: 'sm' | 'md' | 'lg' | 'xl';
    padding?: 'none' | 'sm' | 'md' | 'lg';
};

export function Card({
    style,
    elevated = true,
    rounded = 'lg',
    padding = 'md',
    ...rest
}: CardProps) {
    return (
        <View
            style={[
                styles.base,
                elevated && styles.elevated,
                rounded === 'sm' && styles.roundedSm,
                rounded === 'md' && styles.roundedMd,
                rounded === 'lg' && styles.roundedLg,
                rounded === 'xl' && styles.roundedXl,
                padding === 'sm' && styles.pSm,
                padding === 'md' && styles.pMd,
                padding === 'lg' && styles.pLg,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: '#fff',
    },
    elevated: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
    },
    roundedSm: { borderRadius: 8 },
    roundedMd: { borderRadius: 12 },
    roundedLg: { borderRadius: 16 },
    roundedXl: { borderRadius: 22 },
    pSm: { padding: 8 },
    pMd: { padding: 12 },
    pLg: { padding: 16 },
});

export default Card;
