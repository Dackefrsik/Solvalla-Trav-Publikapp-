import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const speltips = () => {
  return (
    <View>
      <Text style={styles.text}>Speltips</Text>
    </View>
  )
}

export default speltips

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  }
})