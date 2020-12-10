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


export default function ProductScreen({ route }) {
  const id = route.params.itemId;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${id}.json`
        );
        setData(response.data);
        // console.log(id);
        // console.log(data);
        // on recupere les differentes infos du tableau 
        const product= await AsyncStorage.getItem("product")
        // on met tout les produits sous forme de tableau 
        const arrayProducts=JSON.parse(product)
        // on copie un nouveau tableau et on va push dedans 
        const newProduct=[...arrayProducts]
        newProduct.push({name:data.product.product_name,brands:data.product.brands,image:data.product.image_url})
        console.log([newProduct]);
        
        //on transforme en string
        const stringNewProducts=JSON.stringify(newProduct);
        AsyncStorage.setItem("products",stringNewProducts)

        console.log(product);

    
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const ratingProduct = () => {
    if (data.product.nutrition_grade_fr === "a") {
      return colors.green;
    } else if (data.product.nutrition_grade_fr === "b") {
      return colors.black;
    } else if (data.product.nutrition_grade_fr === "c") {
      return colors.red;
    } else if (data.product.nutrition_grade_fr === "d") {
      return colors.brown;
    } else if (data.product.nutrition_grade_fr === "e") {
      return colors.black;
    } else {
      return colors.grey;
    }
  };

  const ratingProductComment = () => {
    if (data.product.nutrition_grade_fr === "a") {
      return "Excellent";
    } else if (data.product.nutrition_grade_fr === "b") {
      return "Satisfaisant";
    } else if (data.product.nutrition_grade_fr === "c") {
      return "Bon";
    } else if (data.product.nutrition_grade_fr === "d") {
      return "Mauvais";
    } else if (data.product.nutrition_grade_fr === "e") {
      return "Médiocre";
    } else {
      return "pas enregistré"
      
    }
    
  };

  const ratingScoreText = () => {
    if (data.product.nutrition_grade_fr === "a") {
      return "100";
    } else if (data.product.nutrition_grade_fr === "b") {
      return "80";
    } else if (data.product.nutrition_grade_fr === "c") {
      return "70";
    } else if (data.product.nutrition_grade_fr === "d") {
      return "30";
    } else {
      return "10";
      // } else {
      //   ("Données non disponible");
      //   // alert("not registred");
    }
  };

  const isBioorNot = () => {
    if (data.product.labels_tags[0] === "en:organic") {
      return "Produit Biologique";
    } else {
      return "Produit non Biologique";
    }
  };

  const isBioorNotColor = () => {
    if (data.product.labels_tags[0] === "en:organic") {
      return colors.green;
    } else {
      return colors.grey;
    }
  };

  const textProteine = () => {
    if (data.product.nutriscore_data.proteins_value >= 10) {
      return "Excellente quantité";
    } else if (data.product.nutriscore_data.proteins_value >= 5) {
      return "Quantité moyenne";
    } else if (data.product.nutriscore_data.proteins_value < 3) {
      return "Faible quantité";
    } else {
      return "Non renseigné";
    }
  };

  

  const ratingProteineCircle = () => {
    if (data.product.nutriscore_data.proteins_value >= 10) {
      return colors.green;
    } else if (data.product.nutriscore_data.proteins_value >= 5) {
      return colors.orange;
    } else if (data.product.nutriscore_data.proteins_value <= 3) {
      return colors.red;
    } else {
      return colors.grey;
    }
  };

  const ratingFibre = () => {
    if (data.product.fiber_value >= 1) {
      return colors.green;
    } else if (data.product.fiber_value >= 0.5) {
      return colors.orange;
    } else if (data.product.proteins_value <= 0.5) {
      return colors.red;
    } else {
      return colors.grey;
    }
  };

  const ratingFibreCircle = () => {
    if (data.product.fiber_value >= 1) {
      return colors.green;
    } else if (data.product.fiber_value >= 0.5) {
      return colors.orange;
    } else if (data.product.proteins_value <= 0.5) {
      return colors.red;
    } else {
      return colors.grey;
    }
  };

  const fiberComment = () => {
    if (data.product.nutriments.fiber >= 5) {
      return "Riche en fibres";
    } else if (data.product.nutriments.fiber >= 3) {
      return "quantités de fibres satisfaisante";
    } else if (data.product.nutriments.fiber >= 1) {
      return "Quelques fibres";
    } else {
      return "fibres non présentes";
    }
  };


  const caloriecomment=()=>{

// O 160 360 560 800

if (data.product.nutriments["energy-kcal_value"] <= 800) {
  return "Extremement Calorique";
} else if (data.product.nutriments["energy-kcal_value"] <= 560) {
  return "Très calorique";
} else if (data.product.nutriments["energy-kcal_value"] <= 360) {
  return "Riche en calorie";
} else if (data.product.nutriments["energy-kcal_value"] <= 160){
 return "Peu calorique";
}else{
  return "Produit non enrregistré"
}

};


const caloriecirclecolor=()=>{

  // O 160 360 560 800
  
  if (data.product.nutriments["energy-kcal_value"] <= 800) {
    return colors.red;
  } else if (data.product.nutriments["energy-kcal_value"] <= 560) {
    return colors.orange;
  } else if (data.product.nutriments["energy-kcal_value"] <= 360) {
    return colors.greenLight;
  } else if (data.product.nutriments["energy-kcal_value"] <= 160){
   return colors.green;
  }else{
    return "Produit non enrregistré",colors.grey
  }
  
  };


  const satfatCircle = () => {
    if (data.product.nutriments["saturated-fat"] >= 1) {
      return colors.green;
    } else if (data.product.nutriments["saturated-fat"] >= 10) {
      return colors.orange;
    } else if (data.product.nutriments["saturated-fat"] >= 20) {
      return colors.red;
    } else {
      return colors.grey;
    }
  };

  const satfatComment = () => {

    if (data.product.nutriments["saturated-fat"] >= 1) {
      return "Peu de graisses saturées";
    } else if (data.product.nutriments["saturated-fat"]>= 10) {
      return "graisses saturées en quantité";
    } else if (data.product.nutriments["saturated-fat"]>= 20) {
      return "graisses saturées en quantité";
    } else {
      return colors.grey;
    }
  };
  


  const sugarCircle=()=>{
    if (data.product.nutrient_levels=== "low") {
      return colors.green;
    } else if (data.product.nutrient_levels==="high") {
      return colors.red;
    } else {
      return colors.grey;
    }
  }

  const sugarComment=()=>{
    if (data.product.nutrient_levels=== "low") {
      return "Faible quantité";
    } else if (data.product.nutrient_levels==="high") {
      return "forte quantité";
    } else {
      return "données inaccessibles";
    }
  }

  



  return isLoading ? (
    <Text>En cours chargement...</Text>
  ) : (
    <>
      <ScrollView>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.contenaireProduct}>
        <View style={styles.card}>
        <View style={styles.product}>
            <Image
              style={{ height: 100, width: 80, borderRadius: 10 }}
              source={{ uri: data.product.image_url }}
            />
          </View>
          <View style={styles.presentation}>
            <Text style={styles.nameProduct}>{data.product.product_name}</Text>
            <Text style={styles.brand}>{data.product.brands}</Text>
            
            <FontAwesome
              name="circle"
              size={24}
              style={styles.circle}
              color={ratingProduct()}
            />
            <Text style={styles.ratingScoreText}>{ratingScoreText()}/100</Text>
            <Text style={styles.ratingprod}>{ratingProductComment()}</Text>
          </View>

          
        </View>

        <View style={styles.qualityTitle}>
          <Text style={styles.qualite}>Qualités</Text>
          <Text style={styles.portion}>
            Pour {data.product.nutrition_data_prepared_per}
          </Text>
        </View>

        {/* //biologique ou non // */}
        <View style={styles.biocontener}>
        <View style={styles.logobio} >
          <Entypo name="leaf" size={24} color="grey" />
        </View>

        <View style={styles.bio}>
          <View style={styles.biocomment}>
          <Text style={styles.textbio}>Bio</Text>
          <Text>{isBioorNot()}</Text>
          </View>
          </View>
          <View style={styles.checkentypo}> 
          <TouchableOpacity>
          <Entypo name="check" size={24} color={isBioorNotColor()} />
          </TouchableOpacity>
          </View>
        </View>
        




        {/* Proteines */}
        <View style={styles.containerproteine} >
        <View style={styles.logoproteine}>
          
          <FontAwesome5 name="fish" size={24} color="grey" />       
        </View>
        <View style={styles.commentproteine}>
        <Text style={styles.titleproteines}>Protéines</Text>
          <Text>{textProteine()}</Text>
          </View>
          <View style={styles.proteinevaluecircle}>
            
           <View style={styles.proteinesgrammeandvalue}>
           <Text>{data.product.nutriscore_data.proteins_value}</Text>
          <Text>{data.product.nutriments.proteins_unit}</Text>
            </View> 
          
          <FontAwesome
            name="circle"
            size={24}
            style={styles.circle}
            color={ratingProteineCircle()}
          />
          <TouchableOpacity>
          <AntDesign name="rightcircleo" size={24} color="black" /> 
          </TouchableOpacity>
          </View>
        
        </View>
        



        {/* FIBRES */}
        <View style={styles.containerfibre}>
          
          <View style={styles.logofibre} > 
          
          <MaterialCommunityIcons name="corn" size={24} color="grey" />
          
          </View>
          <View style={styles.commentfibre}>
          <Text style={styles.titlefibre}>Fibre</Text>
          <Text>{fiberComment()}</Text>
          </View>
          <View style={styles.fibrevaluecircle}>
          

            <View style={styles.fibregramandvalue}>
            <Text>{data.product.nutriments.fiber}</Text>
           <Text>{data.product.nutriments.fiber_unit}</Text> 
            </View>
            
           <FontAwesome
            name="circle"
            size={24}
            style={styles.circle}
            color={ratingFibreCircle()}
          />
          <TouchableOpacity>
          <AntDesign name="rightcircleo" size={24} color="black" />
          </TouchableOpacity>
          </View>
          </View>

          {/* CALORIES */}
          <View style={styles.caloriecontainer}>
            <View style={styles.logocalorie}>
            <SimpleLineIcons name="energy" size={24} color="grey" />
            </View>
            <View style={styles.commentcalories}>
            <Text style={styles.titlecalorie}>Calories</Text>
            <Text>{caloriecomment()}</Text>
            <View style={styles.diagramcalorie}>
             <View style={{ height: 3,width: 32,backgroundColor: colors.green  }}>
            </View>
             <View style={{ height: 3,width: 40 ,backgroundColor: colors.greenLight }}>
             </View>
             <View style={{ height: 3,width: 40 ,backgroundColor:  colors.orange }}>
             </View>
             <View style={{ height: 3,width: 48 ,backgroundColor: colors.red}}>
             </View>
            </View>
            </View>
            <View style={styles.calorievaluecircle}>
            <View style={styles.caloriegramandvalue}>
            <Text>{data.product.nutriments["energy-kcal_value"]}</Text>
            <Text>{data.product.nutriments["energy-kcal_unit"]}</Text>
            </View> 
            <FontAwesome
            name="circle"
            size={24}
            style={styles.circle}
            color={caloriecirclecolor()}
          />
          <TouchableOpacity>
          <AntDesign name="downcircleo" size={24} color="black" />
          </TouchableOpacity>
            
            
            </View>  
                  
          </View>         
          
{/* 


          // graisses saturées */}
          <View style={styles.containersatfat}>
          <View style={styles.logofatsat}>
          <Ionicons name="ios-water" size={24} color="grey" />
          </View>

          <View style={styles.satfatcomment}>
          <Text style={styles.titlefatsat}>Graisses Saturées</Text>
          <Text>{satfatComment()}</Text>
          </View>
        <View style={styles.fatsatvalueandcircle}>

            <View style={styles.fatsatgrammeandvalue}>
            <Text>{data.product.nutriments["saturated-fat"]}</Text>
            <Text>{data.product.nutriments["saturated-fat_unit"]}</Text> 
            </View>
            <FontAwesome
              name="circle"
              size={24}
              style={styles.circle}
              color={satfatCircle()}
            />
            <TouchableOpacity>
            <AntDesign name="rightcircleo" size={24} color="black" />
            </TouchableOpacity>
            

           </View>

          </View>
            {/* SUCRES  */}
          <View style={styles.sugarcontainer}>

          <View style={styles.logosugar}>

          <FontAwesome5 name="candy-cane" size={24} color="grey" />

          </View>
          <View style={styles.commentsugar}>
            <Text style={styles.sugartitle} >Sucre</Text>
            <Text>{sugarComment()}</Text>
            </View>
            <View style={styles.sugarvalueandcircle}>
              <View style={styles.sugargramandvalue}>
              <Text>{data.product.nutriments.sugars_value}</Text>
              <Text>{data.product.nutriments.sugars_unit}</Text>
              </View>
            
            
            <FontAwesome
              name="circle"
              size={24}
              style={styles.circle}
              color={sugarCircle()}
            />
            <TouchableOpacity>
            <AntDesign name="rightcircleo" size={24} color="black" />
            </TouchableOpacity>
          
            </View>
          </View>
          {/* <Button
          title="Favoris"
         
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Favoris");
          }}
        >
          <Text>Ajouter au favoris</Text>
        </TouchableOpacity> */}
          </View>
          </SafeAreaView>
      </ScrollView>
    </>
  );
}

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

  qualite: {
    fontWeight: "bold",
    color: "black",
  },
  portion: {
    fontWeight: "bold",
    color: "grey",
  },

bio:{
flex:1,
flexDirection:"row",
alignItems:"flex-start",
justifyContent: "space-between",

 },

 biocontener:{
   flex:1,
   flexDirection:"row",
   alignItems:"flex-start",
   justifyContent: "space-between",
   borderBottomColor: "grey",
   borderBottomWidth: 1,
   

 },
 biocomment:{
  
  justifyContent:"center"
 },

  logobio: {
    
    width:50,

  },

  textbio: {
    fontWeight: "bold",
    color: "grey",
    alignItems:"flex-start",
  },
  checkentypo:{
    
    width:30,
  }  ,


  // proteines
  containerproteine:{
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flex:1,
    flexDirection:"row",
    justifyContent: "space-between",
    

  },

  titleproteines:{
    fontWeight:"bold",
    color:"grey"
  },

  logoproteine:{
    width:50,
  },

  proteinevaluecircle:{

    flex:1,
    flexDirection:"flex-end",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    justifyContent: "space-between",

  },
  proteinesgrammeandvalue:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingRight:5,
  },
// fibres



  containerfibre:{
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flex:1,
    flexDirection:"row",
    justifyContent: "space-between",

  },

  logofibre:{
    width:50,
    
  },

  titlefibre:{
    fontWeight:"bold",
    color:"grey"
  },

  fibrevaluecircle:{
    flex:1,
    flexDirection:"flex-end",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    justifyContent: "space-between",


  },

  fibregramandvalue:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingRight:5,


  },


  // calories//
  caloriecontainer:{
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flex:1,
    flexDirection:"row",
    justifyContent: "space-between",
    

  },

   titlecalorie:{
    fontWeight:"bold",
    color:"grey"
  },

  logocalorie:{
    width:50,
  },

  calorievaluecircle:{

    flex:1,
    flexDirection:"flex-end",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    justifyContent: "space-between",
    marginBottom:30,

  },
  caloriegramandvalue:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingRight:5,
  },
 
  diagramcalorie:{
    flex:1,
    flexDirection:"row",
    marginTop:20,
    
  },

  //graisses saturées//
  containersatfat:{
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flex:1,
    flexDirection:"row",
    justifyContent: "space-between",
    

  },

  titlefatsat:{
    fontWeight:"bold",
    color:"grey"
  },

  logofatsat:{
    width:50,
  },

  fatsatvalueandcircle:{

    flex:1,
    flexDirection:"flex-end",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    justifyContent: "space-between",

  },
  fatsatgrammeandvalue:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingRight:5,
  },

 //sugar//
 sugarcontainer:{
  borderBottomColor: "grey",
  borderBottomWidth: 1,
  flex:1,
  flexDirection:"row",
  justifyContent: "space-between",
  

},

sugartitle:{
  fontWeight:"bold",
  color:"grey"
},

logosugar:{
  width:50,
},



sugargramandvalue:{
  flex:1,
  flexDirection:"row",
  justifyContent:"flex-end",
  paddingRight:5,
  
},

sugarvalueandcircle:{

  flex:1,
  flexDirection:"flex-end",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  justifyContent: "space-between",
 
},




});


