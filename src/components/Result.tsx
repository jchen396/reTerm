import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"

interface Props{
    word: String
}

const Result: React.FC<Props> = ({word}) => {

  return (
    <View style={tw`w-80 h-40 flex justify-center items-center border-4 border-gray-300 rounded-lg my-5`}>
      <Text>{word}</Text>
    </View>
  )
}

export default Result