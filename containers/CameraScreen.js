import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [light, setlight] = useState(false);
  // const [sound, setSound] = useState(false);

  //   // on ira chercher les codes barres et les results
  const [results, setResults] = useState([]);
  const [searchBarcode, setSearchBarcode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // navigation.navigate(product) (data)

    navigation.navigate("Product", { itemId: data });
    navigation.navigate("Home", { itemId: data });

  };

  if (hasPermission === null) {
    return <Text>Demande d'accès à votre caméra</Text>;
  }
  if (hasPermission === false) {
    return <Text>Accès refusé</Text>;
  }

  // Pour la lumiere et le son
  // const handleLight = () => {
  //   setLight(true);
  //   alert(`light it up!`);
  // };
  // const handleSound = () => {
  //   setSound(true);
  //   alert(`listen it!`);
  // };

  //   // on va creer une fonction qui va filtrer les item mettre une ternaires pour voir l item par bar code et on va maper pour afficher le resultat
  //   const filterBarCode = results.filter((item) => {
  //     console.log(item);
  //   return(
  //   searchBarcode !== "" ? item.barcode === searchBarcode : item;

  // });

  // const searchResults = filterBarCode.map((data, i) => {

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        // FontAwesome5
        // name="carrot"
        // size={24}
        // color="orange"
        // Entypo
        // name="flashlight"
        // size={24}
        // color="white"
        // onPress={() => setLight(false)}
        // AntDesign
        // name="sound"
        // size={24}
        // color="white"
        // onPress={() => setSound(false)}
      />
      {/* <TouchableOpacity>
        <View style={styles.card}>
          <Text>{data.product.generic_name}</Text>
          <Text>{data.product.brands}</Text>
          <Text>{data.product.status}</Text>
          <Text>{data.product.image_url}</Text>
        </View>
      </TouchableOpacity> */}

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
  // });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
