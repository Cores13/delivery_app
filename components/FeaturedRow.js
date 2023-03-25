import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* Restaurant cards */}
            <RestaurantCard 
                id={123}
                imgUrl='https://links.papareact.com/gn7'
                title="Yo Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is short description"
                dishes={[
                    {
                        _id:"1",
                        name:"Salata",
                        short_description:"Salata šopska",
                        price:"3",
                        image:"https://links.papareact.com/gn7",
                    },
                    {
                        _id:"2",
                        name:"Piletina",
                        short_description:"Pohovana piletina",
                        price:"12",
                        image:"https://links.papareact.com/gn7",
                    },
                    {
                        _id:"3",
                        name:"Govedina",
                        short_description:"Medium rare biftek",
                        price:"30",
                        image:"https://links.papareact.com/gn7",
                    }
                ]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id={1234}
                imgUrl='https://links.papareact.com/gn7'
                title="Yo Emina"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is short description"
                dishes={[
                    {
                        _id:"4",
                        name:"Salata",
                        short_description:"Salata šopska",
                        price:"3",
                        image:"https://links.papareact.com/gn7",
                    },
                    {
                        _id:"5",
                        name:"Piletina",
                        short_description:"Pohovana piletina",
                        price:"12",
                        image:"https://links.papareact.com/gn7",
                    },
                    {
                        _id:"6",
                        name:"Govedina",
                        short_description:"Medium rare biftek",
                        price:"30",
                        image:"https://links.papareact.com/gn7",
                    }
                ]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id={12345}
                imgUrl='https://links.papareact.com/gn7'
                title="Yo Amir"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is short description"
                dishes={[
                    {
                        _id:"7",
                        name:"Salata",
                        short_description:"Salata šopska",
                        price:"3",
                        image:"https://links.papareact.com/gn7",
                    },
                    {
                        _id:"8",
                        name:"Piletina",
                        short_description:"Pohovana piletina",
                        price:"12",
                        image:"https://links.papareact.com/gn7",
                    },
                    {
                        _id:"9",
                        name:"Govedina",
                        short_description:"Medium rare biftek",
                        price:"30",
                        image:"https://links.papareact.com/gn7",
                    }
                ]}
                long={20}
                lat={0}
            />
            <RestaurantCard 
                id={123456}
                imgUrl='https://links.papareact.com/gn7'
                title="Yo Yuumi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is short description"
                dishes={[
                    {
                        _id:"10",
                        name:"Salata",
                        short_description:"Salata šopska",
                        price:"3",
                        image:"https://links.papareact.com/gn7",
                    },
                    {
                        _id:"11",
                        name:"Piletina",
                        short_description:"Pohovana piletina",
                        price:"12",
                        image:"https://links.papareact.com/gn7",
                    },
                    {
                        _id:"12",
                        name:"Govedina",
                        short_description:"Medium rare biftek",
                        price:"30",
                        image:"https://links.papareact.com/gn7",
                    }
                ]}
                long={20}
                lat={0}
            />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow