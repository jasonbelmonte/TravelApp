import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

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
          width: '75%',
          height: '25%',
          backgroundColor: 'white',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: 32,
        }}>
        <Text style={{fontSize: 17, fontWeight: '700'}}>
          빈 칸을 모두 채워주세요
        </Text>
        <TouchableOpacity
          onPress={toggleModal}
          style={{
            width: '100%',
            borderTopWidth: 1,
            borderTopColor: '#ECECEC',
            alignItems: 'center',
            paddingTop: 15,
          }}>
          <Text style={{fontSize: 17, color: '#FFBE2B'}}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ModalTester;
