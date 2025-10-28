import { AvatarTile } from '@/components/gpay/AvatarTile';
import { ManageMoney } from '@/components/gpay/ManageMoney';
import { MerchantTile } from '@/components/gpay/MerchantTile';
import { Section } from '@/components/gpay/Section';
import { SectionSheet } from '@/components/gpay/SectionSheet';
import { TopBar } from '@/components/gpay/TopBar';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.content}>
        <TopBar />

        {/* Hero illustration */}
        <Image source={require('@/assets/design/Cover.png')} resizeMode="cover" style={styles.cover} />

        {/* Sheet with content */}
        <SectionSheet style={styles.sheet}>
          {/* People Grid */}
          <Section title="People">
            <View style={styles.peopleGrid}>
              {['Revan', 'Jack', 'Scott', 'Elly', 'Cally', 'Marina', 'Dory', 'Hank', 'Kaira', 'Alex', 'Bunny', 'Show More'].map((name, idx) => (
                <AvatarTile key={idx} label={name} />
              ))}
            </View>
          </Section>

          {/* Divider */}
          <View style={styles.hr} />

          {/* Businesses & Bills */}
          <Section title="Businesses and Bills" actionText="Explore">
            <View style={styles.businessGrid}>
              {['MakeMyTrip', 'redBus', 'Tata Sky', 'Yatra', 'Barista', 'Zomato'].map((m, i) => (
                <MerchantTile key={i} label={m} />
              ))}
            </View>
          </Section>
        </SectionSheet>

        {/* Bottom sheet: Manage your money */}
        <SectionSheet style={{ marginTop: 12 }}>
          <ManageMoney />
        </SectionSheet>

        {/* Floating New Payment */}
        <View style={styles.fabBar}>
          <View style={styles.fab}>
            <Text style={styles.fabPlus}>＋</Text>
            <Text style={styles.fabText}>New payment</Text>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 96, backgroundColor: '#fff' },
  cover: { width: '100%', height: 140 },
  sheet: { marginTop: -12 },
  peopleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 14,
    columnGap: 10,
    justifyContent: 'space-between',
  },
  businessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 14,
    columnGap: 10,
    justifyContent: 'space-between',
  },
  hr: { height: 1, backgroundColor: '#EDEDED', marginVertical: 12 },
  fabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 24,
    alignItems: 'center',
  },
  fab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  fabText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  fabPlus: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
