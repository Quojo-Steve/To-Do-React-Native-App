import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import Task from "../components/Task";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task && task.trim()) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task.trim()]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View className="flex-1 bg-slate-300">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="pt-10 pb-28 px-5">
          <Text className="text-2xl font-bold mb-2 ">Today's Tasks</Text>
          <View className="mt-5">
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="absolute bottom-0 h-fit p-2 w-full flex-row justify-around items-center bg-slate-500 shadow"
      >
        <TextInput
          placeholder="Enter your task..."
          className="p-4 bg-white rounded-[60px] border-gray-200 border w-[250px] mb-8 opacity-100"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View className="w-16 h-16 bg-white rounded-[60px] justify-center items-center border-gray-200 border mb-8">
            <Text className="font-extralight text-slate-500 text-5xl">+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
