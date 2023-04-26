import React from 'react';
import { ScrollView, StyleSheet , Image} from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { BookData } from '../services/book';
import { Dimensions } from 'react-native';

const DetailScreen = (data: BookData) => {
  const ScreenHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    coverImg: {
      backgroundColor: 'rgba(221,97,142,0.2)',
      width: 'auto',
      height: '40%',
      margin: 16,
    },
    card: {
      padding: 16,
      borderRadius: 16,
      backgroundColor: 'rgba(242,163,40,0.4)',
      marginTop: 24,
      marginHorizontal:16,
    },
    layer: {
      flex: 1,
    },
    description: {
      padding: 16,
      borderRadius: 16,
      backgroundColor: 'rgba(242,163,40,0.4)',
      marginHorizontal:16,
    },
  })

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.card}>
        <MonoText>
          Title:  { data.title }
        </MonoText>
        <MonoText>
          Author: { data.author }
        </MonoText>
      </View>
      <Image
        style={styles.coverImg}
        source={{
          uri: data.coverImageUrl,
        }}
      />
      <View style={styles.description}>
        <MonoText>
          Description: 
        </MonoText>
        <MonoText>
          { data.description }
        </MonoText>
      </View>

    </ScrollView>
    
  
  );
}

export default DetailScreen


