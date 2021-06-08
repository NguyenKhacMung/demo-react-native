import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, FlatList,Image, Dimensions } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
export default class App extends React.Component {
 state = {
  jsonData: '',
  jsonData2:'',
};
componentDidMount() {
  fetch('https://disease.sh/v3/covid-19/countries/vn', {
    method: 'GET',
  })
  .then(response => response.json())
  .then(json => {
    this.setState({
      jsonDatac: json.cases,
      jsonDataa:json.active,
      jsonDatar:json.recovered,
      jsonDatad:json.deaths,
    });
  })
  .catch(error => {
    console.error(error);
  });

  fetch('https://disease.sh/v3/covid-19/all', {
    method: 'GET',
  })
  .then(response => response.json())
  .then(json => {
    this.setState({
      jsonData2c: json.cases,
      jsonData2a:json.active,
      jsonData2r:json.recovered,
      jsonData2d:json.deaths,
    });
  })
  .catch(error => {
    console.error(error);
  });
}
render() {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={colors.background} barStyle="dark-content"/>
        <View
            style={{
              padding:16,
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
            <View >
                <Text style={{fontSize:16,}}>COVID-19</Text>
                <Text style={{fontSize:16,}}>Việt Nam</Text>
            </View>
            <MaterialCommunityIcons
            name="thermometer"
            size={45}
            style={{color: colors.white, backgroundColor: colors.themeColor}}
            />
        </View>
        <View 
        style={{
          borderTopWidth:6,
          borderTopColor: colors.themeColor,
          borderRadius:3

        }}
        />
      
        <Image
        style={styles.logo}
        source={require('./images/vn.png')}
      />
   
         <View style={{ paddingTop: 10 }}>
          <View style={styles.item} >
            <View style={styles.left} >
              <Text>Số ca nhiễm</Text>
            </View>
            <View style={styles.right} >
               <Text>{this.state.jsonDatac}</Text>
             </View>
          </View>

          <View style={styles.item} >
            <View style={styles.left} >
               <Text>Số ca điều trị</Text>
            </View>
            <View style={styles.right} >
                <Text>{this.state.jsonDataa}</Text>
             </View>
          </View>
          <View style={styles.item} >
              <View style={styles.left} >
                 <Text>Số ca khỏi</Text>
              </View>
              <View style={styles.right} >
                  <Text>{this.state.jsonDatar}</Text>
              </View>
          </View>
          <View style={styles.item} >
              <View style={styles.left} >
                 <Text>Số ca tử vong</Text>
              </View>
              <View style={styles.right} >
                  <Text>{this.state.jsonDatad}</Text>
              </View>
          </View>
    </View>
        <View 
          style={{
            marginTop:10,
            borderTopWidth:6,
            borderTopColor: colors.themeColor,
            borderRadius:3
          }}
          />
            <View
            style={{
            
              padding:16,
              flexDirection:"row",
              justifyContent:"space-between"
            }}
            >

        <View >
            <Text style={{fontSize:16}}>COVID-19</Text>
            <Text style={{fontSize:16}}>Thế giới</Text>
        </View>
            <MaterialCommunityIcons
            name="thermometer"
            size={45}
            style={{color: colors.white, backgroundColor: colors.themeColor}}
            />
        </View>
          <View 
          style={{
            borderTopWidth:6,
            borderTopColor: colors.themeColor,
            borderRadius:3

          }}
          />
         <View style={{ paddingTop: 10 }}>
              <View style={styles.item} >
                <View style={styles.left} >
                  <Text>Số ca nhiễm</Text>
                </View>
                <View style={styles.right} >
                   <Text>{this.state.jsonData2c}</Text>
                 </View>
              </View>

              <View style={styles.item} >
                <View style={styles.left} >
                   <Text>Số ca điều trị</Text>
                </View>
                <View style={styles.right} >
                    <Text>{this.state.jsonData2a}</Text>
                 </View>
              </View>
              <View style={styles.item} >
                  <View style={styles.left} >
                     <Text>Số ca khỏi</Text>
                  </View>
                  <View style={styles.right} >
                      <Text>{this.state.jsonData2r}</Text>
                  </View>
              </View>
              <View style={styles.item} >
                  <View style={styles.left} >
                     <Text>Số ca tử vong</Text>
                  </View>
                  <View style={styles.right} >
                      <Text>{this.state.jsonData2d}</Text>
                  </View>
              </View>
     </View>
    </View>
    );
}

};


const colors={
  themeColor:"#ffc66a",
  white:"#fff",
  background:"#f4f6fc",
  greyish:"a5a5a5"
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal:8,
    paddingTop: 40

  },
  item: {
    flexDirection: 'row',
    marginTop: 8,
    padding: 5,
    shadowColor: '#000',
    shadowRadius:4,
    shadowOpacity: 0.25
  },

  left: {
    marginLeft:10,
    width: '50%'

  },

  right: {
    flex: 1,
    justifyContent: 'center',
    marginLeft:8
  },
  logo: {
    left:'30%',
    width: '40%',
    height: '10%',
  },
});
