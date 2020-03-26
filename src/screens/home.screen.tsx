import React from 'react'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.Container}>
        <Text>Home Screen</Text>

        <View style={style.Box}>
          <Text>Box</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Box: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    height: 150,
    width: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
})
