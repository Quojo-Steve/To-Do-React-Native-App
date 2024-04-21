import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Task = (prop) => {
  return (
    <View className="bg-white p-3 flex flex-row justify-between rounded-lg mb-3">
      <View className="flex-row items-center flex-wrap">
        <View className="bg-blue-300 w-6 h-6 opacity-40 mr-2 rounded-md"></View>
        <Text className="max-w-[85%]">{prop.text}</Text>
      </View>
      <View className="w-6 h-6 rounded-full border-blue-300 border"></View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({});
