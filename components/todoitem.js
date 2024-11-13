import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)} >
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
  }
});

export default TodoItem;
