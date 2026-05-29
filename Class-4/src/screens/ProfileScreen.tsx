import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {Button} from '@react-navigation/elements'

const ProfileScreen = () => {

    const navigation = useNavigation<any>()

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPressIn={()=>navigation.popToTop()}>Home</Button>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})