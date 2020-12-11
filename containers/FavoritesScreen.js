import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FavoriteScreen(route) {
  // const[id,setId]=useState();
  // const [productHistory, setProductHistory] = useState([]);
  // useEffect(() => {
  //   const fetchProductHistory = async () => {
  //     const rawSavedHistory= await AsyncStorage.getItem("productHistory");
  //     if(rawSavedHistory !==null){
  //       setProductHistory(JSON.parse(rawSavedHistory));
  //     }
  //   }
  //   fetchProductHistory();
  // },[])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
