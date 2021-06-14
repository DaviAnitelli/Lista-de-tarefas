import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.Title}>Tarefas diárias</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.taskText}
      >
        <TextInput 
          style={styles.input} 
          placeholder={'Digite sua tarefa!'} 
          value={task} 
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={ () => handleAddTask()}>
          <View style={styles.addTask}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#836FFF',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },
  items: {
    marginTop: 30,
  },
  taskText: {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#32CD32',
    borderWidth: 1,
    width: 250,
    backgroundColor: '#00FF7F',
    paddingLeft: 20,
  },
  addTask: {
    width: 60,
    height: 60,
    backgroundColor: '#00FF7F',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#32CD32',
    borderWidth: 1,
  },
  addText:{
    fontSize: 20,
  }
});
