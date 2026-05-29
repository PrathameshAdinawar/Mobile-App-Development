import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {Button} from '@react-navigation/elements'

const SearchScreen = () => {

    const navigation = useNavigation<any>()

  return (
    <View>
      <Text>SearchScreen</Text>
      <Button onPressIn={()=>navigation.popToTop()}>Home</Button>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})