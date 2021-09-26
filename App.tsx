/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useState, createContext, useEffect} from 'react';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import Tabs from './src/navigations/tabs';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
  ApolloLink,
} from '@apollo/client';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';
import {createUploadLink} from 'apollo-upload-client';
import SplashScreen from 'react-native-splash-screen';
declare const global: {HermesInternal: null | {}};

export const GlobalContext = createContext({});

const App = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide(); /** 추가 **/
      }, 2000); /** 스플래시 시간 조절 (2초) **/
    } catch (e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });
  const [accessToken, setAccessToken] = useState('');

  // const clientnoheaders = new ApolloClient({
  //   uri: 'http://35.222.217.201:4000/graphql',
  //   cache: new InMemoryCache()
  // });
  const uploadLink = createUploadLink({
    uri: 'http://35.222.217.201:4000/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  // const client = accessToken === "" ? clientheaders : clientheaders
  return (
    <>
      <GlobalContext.Provider value={{accessToken, setAccessToken}}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
