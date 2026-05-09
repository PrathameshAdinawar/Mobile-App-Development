import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// safe area view to handle notches and safe areas on different devices
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  return (
    //flex 1 to take up the whole screen and display the content in usable area of the screen
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff70' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        // platform specific behavior for keyboard avoiding view 
        // padding for ios and height for android
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1, justifyContent: "flex-start", padding: 24,marginTop:50 }}>
          <View style={{ alignItems: "center", marginBottom: 44 }}>
            <Image
              source={require('@/assets/images/appicon.png')}
              style={{ width: 85, height: 85, marginBottom: 24 }}
            />
            <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 7 }}>
              Sign In
            </Text>
            <Text style={{ fontSize: 14, color: "#666", textAlign: "center" }}>
              Let's experience the joy of telecare AI.
            </Text>
          </View>


          <Text style={{ fontWeight: "900", fontSize: 10, marginBottom: 5 }}>Email Address</Text>

          <View
            style={[
              styles.inputContainer,
              isEmailFocused && styles.glowContainer
            ]}
          >
            <Image
              source={require('@/assets/expo.icon/mail.png')}
              style={styles.icon}
            />
            <TextInput
              placeholder="elementary221b@gmail.com"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setIsEmailFocused(true)}
              // onBlur={() => setIsEmailFocused(false)} 
              style={styles.input}
            />
          </View>

          <Text style={{ fontWeight: "900", fontSize: 10, marginBottom: 5 }}>Password
          </Text>

          <View
            style={[
              styles.inputContainer,
              isPasswordFocused && styles.glowContainer

            ]}
          >
            <Image
              source={require('@/assets/expo.icon/padlock.png')} // Replace with your password icon
              style={styles.icon}
            />
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#aaa"
              secureTextEntry={true}
              onFocus={() => setIsPasswordFocused(true)}
              // onBlur={() => setIsPasswordFocused(false)}
              style={styles.input}
            />
          </View>

          <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => console.log('Sign In pressed')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#72c83c', // Matches the vibrant green from your image
        borderRadius: 25,          // Pill-shaped rounded corners
        height: 60,                // Matches the height profile of your input field
        width: '100%',             // Fills the container; can be changed to an explicit width like 340
        paddingHorizontal: 20,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: '#ffffff',
          fontSize: 18,
          fontWeight: '600',       // Semi-bold text styling
          textAlign: 'center',
        }}
      >
        Sign In →
      </Text>
    </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 15, // Creates consistent space between inputs
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 60,
    borderWidth: 1.5,
    borderColor: '#e2e8f0', // Clean default border to prevent jumping layout
      marginBottom: 20,
  },
  glowContainer: {
    borderColor: '#c2db94',
    shadowColor: '#c2db94',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#000',
  }
});
export default Home

