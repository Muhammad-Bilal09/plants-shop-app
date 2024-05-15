import { StyleSheet,Alert, Text,Button, View,Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';
import plants from './plants'; 
const plant_1 =require("../assets/plant_1.png")
const plant_2 =require("../assets/plant_2.png")
const plant_3 =require("../assets/plant_3.png")
const icon1 =require("../assets/icon1.png")
const icon2 =require("../assets/icon2.png")
const icon3 =require("../assets/icon3.png")
const home = (navigation) => {
  return (

<ScrollView> 
<View style={styles.container}>


   <View style={{flexDirection:"row",justifyContent:"space-between"}}>
   <AntDesign name="caretleft" size={24} color="black" />
   <AntDesign name="shoppingcart" size={24} color="black" />
   </View>
   <View style={{marginTop:20}}>
   <Text style={{fontSize:30,fontWeight:"600",color:"white"}}>Kentia</Text>
   <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
   <Text>Price <br />$198.76</Text>
   <Image source={plant_1} style={{width:50,height:50,borderRadius:10}}/>
   </View>
   <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
   <Text>Price <br />$198.76</Text>
   <Image source={plant_2} style={{width:50,height:50,borderRadius:10}}/>
   </View>
   <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
   <Text>Price <br />$198.76</Text>
   <Image source={plant_3} style={{width:50,height:50,borderRadius:10}}/>
   </View>
   <View style={{marginTop:10,display:"left"}}>
   <Button
   style={{borderRadius:"10"}}
        title="Add to Cart"
        color="gray"
        onPress={() => navigation.navigate('plants', {plants})}
      />
   </View>
   </View>
    <View  style={styles.footer}>
   <Text style={{fontSize:20,fontWeight:"600",marginTop:20}}>Information</Text>
   <Text>Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. </Text>
    </View>
  <Text style={{fontSize:20,fontWeight:"600",marginTop:5}}>Specification</Text>
  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:0}}>
  <Text>
  Suitable for: inside <br />
  Leaf colore: green <br />
  Maintenance: eassy <br />
  Height: 150cm-180cm</Text>
  <Image source={plant_2} style={{width:100,height:100,borderRadius:10}}/>
</View>
  </View>
    </ScrollView>
  
  )
}

export default home

const styles = StyleSheet.create({
  container:{
    height:350,
    paddingLeft:30,
  paddingRight:30,
    backgroundColor:'#4f9871',
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20,
},
  
})