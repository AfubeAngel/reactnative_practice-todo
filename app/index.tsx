import { Text, View, StyleSheet, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import Header from "../components/header";
import TodoItem from "../components/todoitem";
import AddTodo from "../components/addtodo";


export default function Index() {
  const [todos, SetTodos] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Go for shopping',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Write the report',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Submit the application',
    },
    {
      id: '58954a0f-3da1-471f-bd96-145571e29d72',
      title: 'Do the laundry',
    },
  ]);

  const pressHandler = (id: string) => {
    SetTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id);
    });
  }

  // const submitHandler = (title: string) => {
  //   if (title.length > 3) {
  //     SetTodos((prevTodos) => {
  //       return [
  //         {
  //           title: title,
  //           id: Math.random().toString(),
  //         },
  //         ...prevTodos,
  //       ];
  //     });
  //   }
  //   else {
  //     Alert.alert('oops','Todo must be over 3 chars long', [
  //       {
  //         text: 'Too short',
  //         onPress: () => console.log('Too short pressed'),
  //       }
  //     ]);
  //   }
  // }

  const submitHandler = (title: string) => {
    if (title.length <= 3) {
      Alert.alert('oops', 'Todo must be over 3 chars long', [
        { text: 'Too short', onPress: () => console.log('Too short pressed') }
      ]);
      return;  // Exit function if title is too short
    }
    
    SetTodos((prevTodos) => [
      { title, id: Math.random().toString() },
      ...prevTodos,
    ]);
  };
  
  
  return (
    <View>
      {/* header */}
      <Header />
      <View style={styles.container}
    >
      {/* form for todos */}
      <AddTodo submitHandler={submitHandler} />

      {/* todo-lists */}
      <View style={styles.item}>
        <FlatList
        data={todos}
        renderItem={({ item }) => 
        <TodoItem item={item} pressHandler={pressHandler} />}
          keyExtractor={item => item.id}/>
      </View>
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
});
