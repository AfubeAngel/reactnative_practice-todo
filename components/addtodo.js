import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View} from 'react-native';


const AddTodo = ({submitHandler}) => {
  const [title, setTitle] = useState('');

  const newTitle = (value) => {
    setTitle(value);
  };

  return (
         <View>
         <TextInput
          placeholder="Make the bed.... "
          onChangeText={newTitle}
          defaultValue={title}
          style={styles.input} />
        <Button
          title="ADD todo"
          onPress={() => submitHandler(title)} 
          color="coral"
        />
        </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    marginVertical: 8,  
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});


export default AddTodo;
