import { BookData } from '../../services/book';
import { Text, View } from '../Themed';
import { StyleSheet } from "react-native";
import { MonoText } from '../StyledText';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const Card = (data: BookData) => {
  const colorScheme = useColorScheme();
  
  return (
    <Link href={`/modal?id=${data.id}`} asChild >
      <Pressable>
        {({ pressed }) => (
        <View style={{ ...styles.card, opacity: pressed ? 0.5 : 1}}>
          <MonoText>
            <Text style={styles.title}>Title: </Text> { data.title }
          </MonoText>
          <MonoText>
            <Text style={styles.title}>Author: </Text> { data.author }
          </MonoText>
        </View>
      )}
      </Pressable>
    </Link>
  )
}


const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(242,163,40,0.4)',
    marginVertical: 8,
  },
  title: {
    fontWeight: '900'
  }
})


export default Card