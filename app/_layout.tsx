import React from "react";
import { SafeAreaView, Text } from "react-native";
import "@/global.css";

const Home = () => {
  return (
    <SafeAreaView>
      <Text className="text-2xl">Hello world</Text>
      <Text className="mx-10 text-2xl text-purple-600">
        Personal Finance Tracker App
      </Text>
    </SafeAreaView>
  );
};

export default Home;
