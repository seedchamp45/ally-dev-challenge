import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import GetBookData from '../services/book';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import LoadingIcon from './elements/Loading';
import Card from './elements/Card';
import { useState, useEffect } from 'react';
import { BookResponse } from '../services/book';

export default function HomeScreen() {
  const { bookData, loading } = GetBookData();
  const [books, setBook] = useState<BookResponse>()
  
  useEffect(() => {
    if (bookData?.response) {
      setBook(bookData)
    }
  }, [bookData?.response])

  const BookStand = () => {
    return (
      <>
      {
        books && (
          books?.response.map((data, index) => 
            <Card key={index} id={data.id} title={data.title} author={data.author} coverImageUrl={data.coverImageUrl} description={data.description}  />
          )
        )
      }
      </>
    )
  }

  const BookShelf = () => {
    return (
      <ScrollView style={styles.homeScreenFilename}>
        <BookStand /> 
      </ScrollView>
    )
  }

  return (
    <>
    {
      loading ? <LoadingIcon/> : <BookShelf/>
    }
    </>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    padding: 16,
    backgroundColor: 'rgba(221,97,142,0.2)'
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
