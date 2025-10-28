import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type SectionSheetProps = ViewProps & {
    roundedTop?: boolean;
};

export function SectionSheet({ style, roundedTop = true, ...rest }: SectionSheetProps) {
    return <View style={[styles.sheet, roundedTop && styles.roundedTop, style]} {...rest} />;
}

const styles = StyleSheet.create({
    sheet: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 16,
    },
    roundedTop: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
});

export default SectionSheet;
