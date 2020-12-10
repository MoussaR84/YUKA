import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroidBase,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Button
} from "react-native";
import { color, set } from "react-native-reanimated";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../assets/colors";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-community/async-storage';


export default function ProductSScreen({ route }) {
  const[id,setId]=useState();

  // on va utiliser l id le mettre dans un tableau 
  
  
 
  
    // Fetch the token from storage then navigate to our appropriate place
    
  

  return (

    <View>
      <Text>
        machin
      </Text>
    </View>
  ) 
}
  

    
    //   * <ScrollView>
    //   <SafeAreaView style={styles.safeAreaView}>
    //     <View style={styles.contenaireProduct}>
    //     <View style={styles.card}>
    //     <View style={styles.product}>
    //         <Image
    //           style={{ height: 100, width: 80, borderRadius: 10 }}
    //           source={{ uri: data.product.image_url }}
    //         />
    //       </View>
    //       <View style={styles.presentation}>
    //         <Text style={styles.nameProduct}>{data.product.product_name}</Text>
    //         <Text style={styles.brand}>{data.product.brands}</Text>
            
    //         <FontAwesome
    //           name="circle"
    //           size={24}
    //           style={styles.circle}
    //           color={ratingProduct()}
    //         />
    //         <Text style={styles.ratingScoreText}>{ratingScoreText()}/100</Text>
    //         <Text style={styles.ratingprod}>{ratingProductComment()}</Text>
    //       </View>

          
    //     </View>

        
          
    //         </View>
         
    //       </SafeAreaView>
    //   </ScrollView>
    // </>
  

// } */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  contenaireProduct:{

    paddingRight:10,
    paddingLeft:6,
    
  },

  card: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    flex:1,
    alignContent:"flex-end",
    flexDirection: "row",
    marginTop:10,
    justifyContent: "space-between",
    height:160,
    
    
  },

  
    presentation: {
    alignItems: "center",
    marginBottom: 60,
    justifyContent:"center"

  },

  qualityTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
 
  nameProduct: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    
  },

  brands:{
  color:"grey",
  

  },
  ratingScoreText: {
    fontWeight: "bold",
    alignItems:"flex-start"
  },
  
  product: {
    marginBottom: 50,
   
    
  },





});



  