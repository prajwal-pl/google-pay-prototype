import { NumPad } from '@/components/gpay/NumPad';
import { PinField } from '@/components/gpay/PinField';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BalancePinScreen() {
    const [pin, setPin] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [authenticated, setAuthenticated] = React.useState(false);
    const router = useRouter();

    const onKeyPress = (k: string | 'back' | 'submit') => {
        if (k === 'back') {
            setPin((p) => p.slice(0, -1));
            return;
        }
        if (k === 'submit') {
            // Check if PIN is correct
            if (pin === '123456') {
                setAuthenticated(true);
            } else {
                router.back();
            }
            return;
        }
        setPin((p) => (p.length < 6 ? p + k : p));
    };

    // Show balance screen after authentication
    if (authenticated) {
        return (
            <SafeAreaView style={styles.root} edges={['top']}>
                {/* Header */}
                <View style={styles.headerTop}>
                    <Text style={styles.bank}>SBI Bank</Text>
                    <Text style={styles.upi}>UPI</Text>
                </View>
                <View style={styles.headerBar}>
                    <Text style={styles.service}>State Bank of India</Text>
                </View>

                {/* Balance Content */}
                <ScrollView style={styles.balanceContent}>
                    {/* Account Balance Section */}
                    <View style={styles.balanceSection}>
                        <Text style={styles.balanceLabel}>Account balance</Text>
                        <Text style={styles.balanceAmount}>₹5,653.75</Text>
                        <Text style={styles.balanceDate}>{new Date().toLocaleString()}</Text>
                    </View>

                    {/* Transaction Details */}
                    <View style={styles.transactionSection}>
                        <View style={styles.transactionRow}>
                            <Text style={styles.transactionLabel}>Account</Text>
                            <Text style={styles.transactionValue}>SBI India</Text>
                        </View>
                        <View style={styles.transactionRow}>
                            <Text style={styles.transactionLabel}>Savings Account</Text>
                            <Text style={styles.transactionValue}>*****4222</Text>
                        </View>
                    </View>

                    {/* Info Text */}
                    <View style={styles.infoSection}>
                        <Text style={styles.infoText}>
                            Account balance is fetched from your bank and may not reflect recent transactions
                        </Text>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionsSection}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>VIEW PASSBOOK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>CHECK BANK BALANCE</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* Close Button */}
                <View style={styles.closeButtonWrapper}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.closeButtonText}>CLOSE</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    // Show PIN entry screen
    return (
        <SafeAreaView style={styles.root} edges={['top']}>
            {/* Header */}
            <View style={styles.headerTop}>
                <Text style={styles.bank}>SBI Bank</Text>
                <Text style={styles.upi}>UPI</Text>
            </View>
            <View style={styles.headerBar}>
                <Text style={styles.service}>State Bank of India</Text>
            </View>

            {/* PIN Content */}
            <View style={styles.content}>
                <View style={styles.pinHeader}>
                    <Text style={styles.pinLabel}>ENTER 6-DIGIT UPI PIN</Text>
                </View>
                <View style={{ height: 16 }} />
                <PinField length={6} value={pin} show={show} />
            </View>

            {/* Spacer to push NumPad down */}
            <View style={{ flex: 1, minHeight: 24 }} />

            {/* NumPad at bottom */}
            <View style={styles.numPadWrapper}>
                <NumPad onKeyPress={onKeyPress} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#F7F7F8' },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 0,
        paddingBottom: 10,
        backgroundColor: '#FFFFFF',
    },
    bank: { fontSize: 18, fontWeight: '700', color: '#11181C' },
    upi: { fontSize: 18, fontWeight: '800', color: '#1E3A8A' },
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E3A8A',
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    service: { color: '#fff', fontSize: 14, fontWeight: '600' },
    amount: { color: '#fff', fontSize: 14, fontWeight: '600' },
    chev: { color: '#fff', fontSize: 16 },
    content: { backgroundColor: '#FFFFFF', paddingTop: 16, paddingBottom: 20 },
    pinHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    pinLabel: { color: '#6B7280', fontWeight: '700', letterSpacing: 0.5 },
    eye: { color: '#1F2937' },
    show: { color: '#1F2937', fontWeight: '700' },
    numPadWrapper: {
        paddingTop: 20,
        paddingBottom: 34,
        backgroundColor: '#FFFFFF',
    },
    // Balance screen styles
    balanceContent: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    balanceSection: {
        paddingHorizontal: 20,
        paddingTop: 32,
        paddingBottom: 24,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    balanceLabel: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 8,
        fontWeight: '400',
    },
    balanceAmount: {
        fontSize: 40,
        fontWeight: '400',
        color: '#11181C',
        marginBottom: 4,
    },
    balanceDate: {
        fontSize: 12,
        color: '#9CA3AF',
        fontWeight: '400',
    },
    transactionSection: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#F9FAFB',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E7EB',
    },
    transactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    transactionLabel: {
        fontSize: 14,
        color: '#6B7280',
        fontWeight: '400',
    },
    transactionValue: {
        fontSize: 14,
        color: '#11181C',
        fontWeight: '500',
    },
    infoSection: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#FFFFFF',
    },
    infoText: {
        fontSize: 12,
        color: '#6B7280',
        lineHeight: 18,
        fontWeight: '400',
    },
    actionsSection: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    actionButton: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#1E3A8A',
        marginBottom: 12,
        alignItems: 'center',
    },
    actionButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E3A8A',
        letterSpacing: 0.5,
    },
    closeButtonWrapper: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingVertical: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E5E7EB',
    },
    closeButton: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: '#1E3A8A',
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
});