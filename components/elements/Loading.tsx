import { View } from "react-native";
import { ActivityIndicator, StyleSheet } from "react-native";


const LoadingIcon = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={"#000"} size={'large'}  />
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LoadingIcon