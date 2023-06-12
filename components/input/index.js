import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState }from 'react'
import styles from './style'

const Input = (props) => {
  const [task, setTask] = useState('')
  const handleAddTask=()=>{
    if (task.length===0){
      alert("Bạn phải nhập công việc")
      return false
    }
    props.onAddTask(task);
    setTask('')
    Keyboard.dismiss()
  }
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder='Your task' 
                onChangeText={(text) => setTask(text)} value={task}>
      </TextInput>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.button}>
            <Text style={styles.plus}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Input