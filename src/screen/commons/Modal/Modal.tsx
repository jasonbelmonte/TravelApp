import React from 'react';
import {Button, Text, View} from 'react-native';

function ModalTester(props: any) {
  const toggleModal = () => {
    props.setErrorModal(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
      }}>
      <View
        style={{
          borderRadius: 10,
          width: '80%',
          height: '25%',
          backgroundColor: 'white',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 17}}>!! 내용을 입력해 주세요 !!</Text>
        <Button
          title="네 알겠습니다."
          onPress={toggleModal}
          color={'#FFBE2B'}
        />
      </View>
    </View>
  );
}
export default ModalTester;
