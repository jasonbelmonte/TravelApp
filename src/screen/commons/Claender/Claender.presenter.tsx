import {
  Colum4,
  ModalView,
  ButtonClose,
  Calendar,
 


 
} from './Caleander.styles';
import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { Alert, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function ClaenderUI(props:any) {
  const backIcon =<Icon name='caret-back-outline' size={25}color={"#FFBE2B"}/>
  const forwardIcon =<Icon name='caret-forward-outline' size={25} color={"#FFBE2B"}/>
  return (
    <>
      

            <Calendar>
              <ModalView>
         
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={props.minDate}
              maxDate={props.maxDate}
              previousTitle={backIcon}
              nextTitle={forwardIcon}
              weekdays={['일', '월','화','수','목','금','토']}
              // months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
              todayBackgroundColor="#ffbf2b87"
              selectedDayColor="#FFBE2B"
              selectedDayTextColor="black"
              // scaleFactor={375}
              // textStyle={{
              //   fontFamily: 'Cochin',
              //   color: '#000000',
              // }}
              onDateChange={props.onDateChange}
              />
             <ButtonClose onPress={()=>props.setShow(false) || props.setClaenderDate({startDate:props.startDate , endDate:props.endDate}) }>
                <Colum4>
                   확인
                </Colum4>
              </ButtonClose>
              </ModalView>
              </Calendar>
              
           
          
    </>
  );
}
