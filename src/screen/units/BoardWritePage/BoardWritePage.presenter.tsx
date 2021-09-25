import {
  Wrapper,
  Button,
  BackIcon,
  Head,
  Colum,
  Colum2,
  Colum3,
  Colum3_2,
  Colum4,
  Body,
  Contents,
  Title,
  DatePick,
  WriteBox,
  BodyBox,
  WorldPick,
  LocPick,
  IconImg,
  Line,
  ImageBox,
  ImagePicked,
  Image1,
  Error,
} from './BoardWritePage.styles';
import React from 'react';
import {Alert, Dimensions, Modal, StyleSheet} from 'react-native';

import Claender from '../../commons/Calender/Calender.container';
import {Picker} from '@react-native-picker/picker';
import Map01 from '../../commons/Map/Map01.container';
import {Controller} from 'react-hook-form';

import Uploads01 from '../../commons/uploads/Uploads01/Uploads01.container';
import {View} from '../MapPage/MapPage.styles';
import ModalTester from '../../commons/Modal/Modal';
export default function BoardWritePageUI(props: any) {
  const styles = StyleSheet.create({
    picker: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 17.5,
    },
  });
  const startPicked = props.claenderDate.startDate
    ? props.claenderDate.startDate + '~'
    : '날짜를';
  const endPicked = props.claenderDate.startDate
    ? props.claenderDate.endDate
    : '선택';
  return (
    <>
      <Head>
        <Button onPress={() => props.navigation.goBack(null)}>
          <BackIcon source={require('../../../Assets/Images/GoToBack_B.png')} />
        </Button>
        <Colum>동행찾기 글쓰기</Colum>

        <Button onPress={props.onPressRegist}>
          <Colum2>등록</Colum2>
        </Button>
      </Head>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.show}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          props.setShow(!props.show);
        }}>
        <Claender
          setShow={props.setShow}
          setClaenderDate={props.setClaenderDate}
          claenderDate={props.claenderDate}
        />
      </Modal>
      <Wrapper>
        <Body>
          <Title
            onChangeText={value =>
              props.setInput({...props.input, title: value})
            }
            placeholder={'제목'}
            value={props.input.title}></Title>

          <Modal
            animationType="slide"
            transparent={true}
            visible={props.errorModal}>
            <ModalTester setErrorModal={props.setErrorModal} />
          </Modal>

          <DatePick onPress={() => props.setShow(true)}>
            <IconImg
              source={require('../../../Assets/Images/IconSchedule.png')}
            />

            <Colum3
              startDate={
                props.claenderDate.startDate && props.claenderDate.endDate
              }>
              {startPicked}
            </Colum3>

            <Colum3
              startDate={
                props.claenderDate.startDate && props.claenderDate.endDate
              }>
              {endPicked}
            </Colum3>
          </DatePick>

          <BodyBox>
            <WorldPick>
              <IconImg
                source={require('../../../Assets/Images/IconEarth.png')}
              />

              <Picker
                // selectedValue={value}
                // onValueChange={value => {
                //   onChange(value);
                // }}
                selectedValue={props.input.area}
                onValueChange={value =>
                  props.setInput({...props.input, area: value})
                }
                mode="dialog" // Android only
                style={styles.picker}
                dropdownIconColor={'none'}>
                <Picker.Item
                  style={{fontSize: 12, color: '#A5A5A5'}}
                  label="대륙 선택"
                  value="대륙 선택"
                />
                <Picker.Item style={{fontSize: 12}} label="유럽" value="유럽" />
                <Picker.Item
                  style={{fontSize: 12}}
                  label="아시아"
                  value="아시아"
                />
                <Picker.Item
                  style={{fontSize: 12}}
                  label="북아메리카"
                  value="북아메리카"
                />
                <Picker.Item
                  style={{fontSize: 12}}
                  label="남아메리카"
                  value="남아메리카"
                />
                <Picker.Item
                  style={{fontSize: 12}}
                  label="아프리카"
                  value="아프리카"
                />
                <Picker.Item
                  style={{fontSize: 12}}
                  label="오세아니아"
                  value="오세아니아"
                />
              </Picker>
            </WorldPick>
            <Modal
              animationType="slide"
              transparent={true}
              visible={props.map}
              onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                props.setShow(!props.map);
              }}>
              <Map01
                setMap={props.setMap}
                setOnLocationSelect={props.setOnLocationSelect}
              />
            </Modal>
            <LocPick onPress={() => props.setMap(true)}>
              <IconImg
                source={require('../../../Assets/Images/IconLocationInBoard.png')}
              />

              <Colum3_2 onLocationSelect={props.onLocationSelect.city}>
                {props.onLocationSelect.city
                  ? props.onLocationSelect.city + ','
                  : '위치'}
              </Colum3_2>

              <Colum3_2 onLocationSelect={props.onLocationSelect.country}>
                {props.onLocationSelect.country
                  ? props.onLocationSelect.country
                  : '선택'}
              </Colum3_2>
            </LocPick>
          </BodyBox>
          <WriteBox>
            <Contents
              onChangeText={value =>
                props.setInput({...props.input, contents: value})
              }
              value={props.input.contents}
              multiline={true}
              placeholder="동행을 구하기 위한 글을 작성해주세요. &#13;&#10;( 제목에 위치, 일정, 기간을 자세히 적을 수록 내 글을 더 많은 동행들에게 &#13;&#10; 보여줄 수 있어요 ! )"></Contents>
          </WriteBox>
          <Line />
          <ImageBox>
            {new Array(3).fill(1).map((data, index) => (
              <Uploads01
                key={`${data}_${index}`}
                index={index}
                onChangeFiles={props.onChangeFiles}
              />
            ))}
          </ImageBox>
        </Body>
      </Wrapper>
    </>
  );
}
