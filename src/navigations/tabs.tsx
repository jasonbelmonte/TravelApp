import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Screen1 from '../screen/Screen1';
// import Screen2 from '../screen/Screen2';
// import Screen3 from '../screen/Screen3';
// import Screen4 from '../screen/Screen4';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button} from 'react-native';
import styled from '@emotion/native'
import MainPage from '../screen/units/MainPage/MainPage.container';
import BoardWritePage from '../screen/units/BoardWritePage/BoardWritePage.container';
import MapPage from '../screen/units/MapPage/MapPage.container';
import ScrapListPage from '../screen/units/ScrapListPage/ScrapListPage.container';
import MyPage from '../screen/units/MyPage/MyPage.container';
import LoginPage from '../screen/units/LoginPage/LoginPage.container';
import CommentAlarmPage from '../screen/units/CommentAlarmPage/CommentAlarmPage.container';
const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const ScrapStack = createNativeStackNavigator();
const MypageStack = createNativeStackNavigator();
// const HomeStack = creacteStackNavigator();
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '130512445436-afrk54n1cvkdtc8v6vcch03n3pmcq3qg.apps.googleusercontent.com',
});

const Wrapper = styled.View`
  width : 100%;
  height : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={MainPage}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Write"
        component={BoardWritePage}
        options={{
          title: '동행찾기 글쓰기',
          // headerShown: false
        }}
      />
    </HomeStack.Navigator>
  );
};
const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="Map"
        component={MapPage}
        options={{title: 'Map', headerShown: false}}
      />
    </MapStack.Navigator>
  );
};

const ScrapStackScreen = () => {
  return (
    <ScrapStack.Navigator>
      <ScrapStack.Screen
        name="Scrap"
        component={ScrapListPage}
        options={{title: 'Scrap', headerShown: false}}
      />
    </ScrapStack.Navigator>
  );
};

const MypageStackScreen = () => {
  return (
    <MypageStack.Navigator>
      <MypageStack.Screen
        name="Mypage"
        component={MyPage}
        options={{title: 'Mypage', headerShown: false}}
      />
      <MypageStack.Screen
        name="CommentAlarmpage"
        component={CommentAlarmPage}
        options={{title: 'CommentAlarmpage', headerShown: false}}
      />
    </MypageStack.Navigator>
    
  );
};

// const LoginStackScreen = () => {
//   return (
//     <LoginStack.Navigator>
//     <LoginStack.Screen
//       name = "Login"
//       component= {LoginPage}
//       options = {{title: 'Login하세용', headerShown: true}}
//     />
//   </LoginStack.Navigator>
//   )

// }
export default function Tabs() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin && (
        <>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'HomeStack') {
                  iconName = focused ? 'home' : 'home-outline';
                }
                if (route.name === 'MapStack') {
                  iconName = focused ? 'map' : 'map-outline';
                }
                if (route.name === 'ScrapStack') {
                  iconName = focused ? 'bookmark' : 'bookmark-outline';
                }
                if (route.name === 'MypageStack') {
                  iconName = focused
                    ? 'person-circle'
                    : 'person-circle-outline';
                  size = 30;
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },

              tabBarActiveTintColor: '#FFBE2B',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                height: 60,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              },
            })}>
            <Tab.Screen name="HomeStack" component={HomeStackScreen} />
            <Tab.Screen name="MapStack" component={MapStackScreen} />
            <Tab.Screen name="ScrapStack" component={ScrapStackScreen} />
            <Tab.Screen name="MypageStack" component={MypageStackScreen} />
          </Tab.Navigator>
          <Button title="로그아웃좀 하세요" onPress={() => setIsLogin(false)} />
        </>
      )}
      {!isLogin && (
        <Wrapper>
          
          {/* <LoginStack.Navigator>
            <LoginStack.Screen
              name="Login"
              component={LoginPage}
              options={{title: 'Login하세용', headerShown: false}}
            />
          </LoginStack.Navigator> */}
          <GoogleSigninButton
            style={{ width: 200, height: 50 }}
            onPress={async () => {
              const {idToken} = await GoogleSignin.signIn();
              console.log(idToken);

              // Create a Google credential with the token
              const googleCredential =
                auth.GoogleAuthProvider.credential(idToken);

              // Sign-in the user with the credential
              const result = await auth().signInWithCredential(
                googleCredential,
              );
              //console.log(result)
              setIsLogin(true);
            }}
          />
        </Wrapper>
      )}
    </>
  );
}
