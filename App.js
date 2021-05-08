import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import {Alert} from "react-native";
import axios from "axios";
import Weather from "./Weather";

// react native에서 <View>는 웹에서 div랑 같음
// 웹에서는 flex box의 default는 row이지만
// react native에서 모든 flex box의 default flexDeireaction:column이다,
// 폰은 기본적으로 모든게 서로 아래에 있기 때문이다.

// 리액트 네이티브에서는 width, height를 사용안하고 flex를 많이 사용함
// flex 레이아웃으로 코딩 권장

const API_KEY = "c64fc21636f118a219b5a635386413ff";

export default class extends React.Component {
  state = {
    isLoading:true
  }
  getWeather = async (latitude,longitude) => {
    const {
      data:{
        main:{temp},
        weather
      }
    } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(weather);
    this.setState({isLoading: false, condition: weather[0].main, temp})
  }
  getLocation = async () => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      // Location permission is required to do this operation 경고는 우리 사용자에게 permission을 요청해야만 한다는 뜻.
      // permission 요청을 위해서 Location.getPermissionsAsync() 사용
      // permissions 이 승인 됐을때 resolve된 promise 를 리턴할 것, 거절 됐을때는 rejects 를 리턴

      // API로 전송해서 날씨를 가져옴
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can 't find you", "So sad");
    }

  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ?  <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

