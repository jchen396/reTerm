import { View, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import tw from "twrnc"
import {useState} from "react"
import Result from '../components/Result';

const HomeScreen = () => {
  const [word, setWord] = useState("");
  const [isSent, setIsSent] = useState(false);
  console.log( word );
  const onSubmitHandler = (event: any) => {
    setIsSent(true);
    setWord(event.nativeEvent.text)
  }
  return (
    <ScrollView contentContainerStyle={tw`flex-col justify-center items-center`} style={tw`h-full py-20`}>
      <View style={tw`border-2 border-gray-300 h-10 w-80 px-2 rounded-full flex-row`}> 
        <View style={tw`h-9 w-10 flex items-center justify-center`}>
            <Ionicons  name="search" size={20} color="gray"/>
        </View>
        <TextInput 
        onSubmitEditing={(event) => onSubmitHandler(event)}
        placeholder="Please enter a word..." 
        underlineColorAndroid="transparent" />
      </View>
      <Result word={word} isSent={isSent}/>
    </ScrollView>
  )
}

export default HomeScreen