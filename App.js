import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,ScrollView, View,Alert } from 'react-native';
import React, { useState }from 'react'
import Body from './components/body'
import Input from './components/input'

export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) =>{
    setTaskList([...taskList,task]);
  }
  const handleDeleteTask=(index)=>{
    Alert.alert('Thông báo!!!', 'Bạn có chắc chắn muốn xóa ?', [
      {text: 'OK', onPress: () => {
        let taskListTmp=[...taskList];
        taskListTmp.splice(index,1);
        setTaskList(taskListTmp);
        }
      },
      {
        text: 'Cancel',
        onPress: ()=>{},
        style: 'cancel',
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Todo List</Text>
        <ScrollView style={styles.scroll}>
          {
            taskList.map((item, index) =>{
              return <Body key={index} 
                          title={item} 
                          number={index+1} 
                          onDeleteTask={()=>handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
      <View style={styles.input}>
          <Input onAddTask={handleAddTask}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ebf9fa',
  },
  body:{
    flex:1,
    marginHorizontal:25,
    marginTop:50,
  },
  title:{
    fontSize:25,
    fontWeight:600,
    color:'#347ff7',
  },
});