import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'

const DetailScreen = ({route}:any) => {

    const navigation = useNavigation<any>()
    const {username} = route.params;

  return (
    <View>
      <Text>DetailScreen</Text>
      <Text> Params passed from Home: {username}</Text>
      <Button onPressIn={()=>navigation.navigate("Profiles")}>Go to profile</Button>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})