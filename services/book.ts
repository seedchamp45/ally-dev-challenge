import { useEffect, useState } from 'react';
import api from './api';

export interface BookResponse {
  response: BookData[]
}

export interface BookData {
  id: number
  title: string
  author: string
  coverImageUrl: string
  description: string
}

const GetBookData = () => {
  const [bookData, setBookData] = useState<BookResponse>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState()

  useEffect(() => {
    api({
      method:'GET',
      url:'/',
    })
    .then(res => setBookData(res.data))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  }, [])
  
  return { bookData, loading, error }
};

export default GetBookData