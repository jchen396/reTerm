import { View, Text } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import axios from 'axios'
import { useEffect } from 'react'

interface Props{
  word: string;
  isSent: boolean;
}

const Result: React.FC<Props> = ({word, isSent}) : any => {
  const [definition, setDefinition] = useState(""); 
  useEffect(() => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then((response) => {
      console.log(response.data)
      setDefinition(response.data[0].meanings[0].definitions[0].definition)
    })
    .catch((err) => {
      console.log(err)
    });  
    console.log(url)
  }, [word])
  return ( 
    <View style={tw`w-80 h-40 flex justify-center items-center border-4 border-gray-300 rounded-lg my-5 p-2 ${isSent ? 'opacity-100' : 'opacity-0'}`}>
      <Text>{definition}</Text>
    </View>
  )
}

export default Result;