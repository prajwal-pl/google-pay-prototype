import { NumPad } from '@/components/gpay/NumPad';
import { PinField } from '@/components/gpay/PinField';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BalancePinScreen() {
    const [pin, setPin] = React.useState('');
    const [show, setShow] = React.useState(false);
    const router = useRouter();

    const onKeyPress = (k: string | 'back' | 'submit') => {
        if (k === 'back') {
            setPin((p) => p.slice(0, -1));
            return;
        }
        if (k === 'submit') {
            // For now, just go back to keep behavior non-breaking
            router.back();
            return;
        }
        setPin((p) => (p.length < 6 ? p + k : p));
    };

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.main}>
                {/* Header */}
                <View style={styles.headerTop}>
                    <Text style={styles.bank}>SBI Bank</Text>
                    <Text style={styles.upi}>UPI</Text>
                </View>
                <View style={styles.headerBar}>
                    <Text style={styles.service}>State Bank of India</Text>
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <Text style={styles.amount}>₹ 1.00</Text>
                    <Text style={styles.chev}>▾</Text>
                </View> */}
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <View style={styles.pinHeader}>
                        <Text style={styles.pinLabel}>ENTER 6-DIGIT UPI PIN</Text>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text style={styles.eye}>👁</Text>
            <Text style={styles.show} onPress={() => setShow((s) => !s)}>
              {show ? 'HIDE' : 'SHOW'}
            </Text>
          </View> */}
                    </View>
                    <View style={{ height: 16 }} />
                    <PinField length={6} value={pin} show={show} />
                </View>
            </View>

            {/* Keypad */}
            <View style={styles.padWrap}>
                <NumPad onKeyPress={onKeyPress} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#F7F7F8' },
    main: { flex: 1 },
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
    // Slightly reduce top padding to pull the PIN area up a bit
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
    spacer: { height: 24 },
    padWrap: {
        paddingTop: 0,
        backgroundColor: 'transparent',
    },
});
