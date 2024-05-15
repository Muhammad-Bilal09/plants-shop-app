import { StyleSheet,Alert,Button,Image, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
import { AntDesign } from '@expo/vector-icons';
// plants
const plant_1=require("../assets/plant_1.png")
const plant_2=require("../assets/plant_2.png")
const plant_3=require("../assets/plant_3.png")
const plant_4=require("../assets/plant_4.png")
const plant_5=require("../assets/plant_5.png")
const plant_6=require("../assets/plant_6.png")
const plant_7=require("../assets/plant_7.png")
const plant_8=require("../assets/plant_8.png")
const plant_9=require("../assets/plant_9.png")
const plant_10=require("../assets/plant_10.png")
const plant_11=require("../assets/plant_11.png")
const plant_12=require("../assets/plant_12.png")
const plant_13=require("../assets/plant_13.png")
const plant_14=require("../assets/plant_14.png")
const plant_15=require("../assets/plant_15.png")
const plant_16=require("../assets/plant_16.png")
const plant_17=require("../assets/plant_17.png")

const plants = () => {
  return (
    <ScrollView style={styles.container}>
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Text style={{fontSize:30,fontWeight:"600",color:"green"}}>
      Buy plants 
      </Text>
      <AntDesign name="shoppingcart" size={24} color="black" />
      </View>
     
      <View style={styles.card}>
   <Text>Price <br />$30</Text>
   <Image source={plant_9} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$40</Text>
   <Image source={plant_10} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
    <View style={styles.card}>
   <Text>Price <br />$50</Text>
   <Image source={plant_1} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$60</Text>
   <Image source={plant_2} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$70</Text>
   <Image source={plant_3} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$80</Text>
   <Image source={plant_4} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$90</Text>
   <Image source={plant_5} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$100</Text>
   <Image source={plant_6} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$110</Text>
   <Image source={plant_7} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$120</Text>
   <Image source={plant_8} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$130</Text>
   <Image source={plant_11} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$140</Text>
   <Image source={plant_12} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$140</Text>
   <Image source={plant_13} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$150</Text>
   <Image source={plant_14} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$160</Text>
   <Image source={plant_15} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$170</Text>
   <Image source={plant_16} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
   <View style={styles.card}>
   <Text>Price <br />$180</Text>
   <Image source={plant_17} style={{width:50,height:50,borderRadius:10}}/>
   <Button
        title="Add"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View>
    </View>
    </ScrollView>
  )
}

export default plants

const styles = StyleSheet.create({
  container:{
   paddingLeft:25,
   paddingRight:25,

  },
  card:{
    padding:20,
  borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between",
  alignItems:"center",
    marginTop:20,
    backgroundColor:"white"
  }
})