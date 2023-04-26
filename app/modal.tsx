import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import GetBookData, { BookData } from '../services/book';
import DetailScreen from '../components/DetailScreen';
import { useLocalSearchParams, useSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

export default function ModalScreen() {
  const params = useLocalSearchParams()
  const { bookData, loading } = GetBookData();
  const [ currentBookData, setCurrentBookData ] = useState<BookData>();
  const ScreenHeight = Dimensions.get('window').height;
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(221,97,142,0.2)',
      height: ScreenHeight-40,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  useEffect(() => {
    if (bookData?.response) {
      setCurrentBookData(bookData?.response.filter((data) => data.id === +(params?.id ?? 0))[0])
    }
  }, [bookData?.response])

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {
        currentBookData && (
          <DetailScreen id={currentBookData.id} title={currentBookData.title} author={currentBookData.author} coverImageUrl={currentBookData.coverImageUrl} description={currentBookData.description} />
        )
      }
    </View>
  );
}

