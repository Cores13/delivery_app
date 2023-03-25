import { StyleSheet, View, Text, SafeAreaView, Image, Platform,StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'




const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    const styles = StyleSheet.create({
        container: {
            marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        },
    });
    
  return (
    <SafeAreaView className="bg-white pt-4">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2" style={styles.container}>
            <Image source={{
                    uri: "https://links.papareact.com/wru"
                }} 
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>

            <UserIcon size={35} color="#00CCBB" />

        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                <MagnifyingGlassIcon size={20} color="gray" />
                <TextInput placeholder="Restaurants and cuisines"
                    kexboardType="default"
                 />
            </View>

            <AdjustmentsHorizontalIcon size={20} color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            {/* Categories */}
            <Categories />

            {/* Featured rows */}
            <FeaturedRow 
                id="1"
                title="Featured"
                description="Paid placements from our partners"
            />
            <FeaturedRow 
                id="2"
                title="Tasty Discounts"
                description="Paid placements from our partners"
            />
            <FeaturedRow 
                id="3"
                title="Offers near you!"
                description="Paid placements from our partners"
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen