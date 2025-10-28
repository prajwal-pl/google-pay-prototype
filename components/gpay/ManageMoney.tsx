import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from './Card';
import { RowItem } from './RowItem';
import { TagBadge } from './TagBadge';

export function ManageMoney() {
    return (
        <View style={{ gap: 16 }}>
            <Text style={styles.heading}>Manage your money</Text>

            {/* Two promo cards */}
            <View style={styles.cardRow}>
                <Card padding="lg" rounded="xl" style={[styles.promoCard]}>
                    <View style={styles.icon}
                    >
                        <Ionicons name="receipt-outline" size={18} color="#3b82f6" />
                    </View>
                    <Text style={styles.cardTitle}>Personal loan</Text>
                    <Text style={styles.cardDesc}>Up to ₹10 lakh,{"\n"}instant approval</Text>
                    <Text style={styles.cardCta}>Apply now</Text>
                </Card>

                <Card padding="lg" rounded="xl" style={[styles.promoCard]}>
                    <View style={[styles.icon]}
                    >
                        <Ionicons name="card-outline" size={18} color="#3b82f6" />
                    </View>
                    <TagBadge text="₹0 joining fee" style={{ position: 'absolute', right: 12, top: 12 }} />
                    <Text style={styles.cardTitle}>Credit card</Text>
                    <Text style={styles.cardDesc}>{"Save up to\n₹12,000 yearly"}</Text>
                    <Text style={styles.cardCta}>Apply now</Text>
                </Card>
            </View>

            {/* Rows */}
            <View style={styles.rowGroup}>
                <RowItem title="Check your CIBIL score for free" icon="create-outline" />
                <View style={styles.divider} />
                <RowItem title="See transaction history" icon="time-outline" />
                <View style={styles.divider} />
                <RowItem title="Check bank balance" icon="business-outline" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: { fontSize: 20, fontWeight: '700', color: '#11181C' },
    cardRow: { flexDirection: 'row', gap: 12 },
    promoCard: {
        flex: 1,
        backgroundColor: '#0b1324',
        borderRadius: 16,
    },
    icon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#EAF2FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    cardTitle: { fontSize: 18, color: '#fff', fontWeight: '700' },
    cardDesc: { fontSize: 13, color: '#d1d5db', marginTop: 4, lineHeight: 18 },
    cardCta: { fontSize: 14, color: '#93c5fd', fontWeight: '700', marginTop: 12 },
    rowGroup: {
        backgroundColor: '#fff',
        borderRadius: 14,
        paddingHorizontal: 4,
    },
    divider: { height: 1, backgroundColor: '#EDEDED' },
});

export default ManageMoney;
