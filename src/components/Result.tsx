import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import tw from "twrnc"
import axios from 'axios'
import { useEffect } from 'react'

interface Props{
  word: string;
  isSent: boolean;
}

const Result: React.FC<Props> = ({word, isSent}) : any => {
  const [definition, setDefinition] = useState(""); 
  const [currentDef, setCurrentDef] = useState(0);
  const [defLength, setDefLength] = useState(0);
  useEffect(() => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then((response) => {
      setDefLength(response.data[0].meanings[0].definitions.length );
        setDefinition(response.data[0].meanings[0].definitions[currentDef].definition)
    })
    .catch((err) => {
      console.log(err)
    });  
    console.log(definition)
  }, [word, currentDef])
  const onPrevHandler = () => {
    if(currentDef !== 0)
      setCurrentDef((count) => count - 1)
  }
  const onNextHandler = () => {
    if(currentDef < defLength - 1)
      setCurrentDef((count) => count + 1)
  }

  return ( 
    <View style={tw`relative w-80 h-40 flex justify-center items-center border-4 border-gray-300 rounded-lg my-5 p-2 ${isSent ? 'opacity-100' : 'opacity-0'} flex-row `}>
      <AntDesign onPress={onPrevHandler} style={tw`absolute left-0`} name="caretleft" size={24} color={`${currentDef > 0 ? 'black' : 'gray'}`} /> 
      <Text style={tw`mx-10`}>{definition}</Text>
      <AntDesign onPress={onNextHandler} style={tw`absolute right-0`} name="caretright" size={24} color={`${currentDef < defLength - 1 ? 'black' : 'gray'}`} />
    </View>
  )
}

export default Result;