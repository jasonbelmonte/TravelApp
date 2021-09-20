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
import React, {useState, createContext} from 'react';

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
declare const global: {HermesInternal: null | {}};

export const GlobalContext = createContext({});

const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

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
      <GlobalContext.Provider
        value={{accessToken, setAccessToken, userInfo, setUserInfo}}>
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
