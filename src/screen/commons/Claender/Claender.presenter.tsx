import React, { Component } from 'react'
import {View,ToastAndroid} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import  Icon  from 'react-native-vector-icons/Ionicons';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';



function CalendarPage() {
 
     return (
      <View style={{backgroundColor:"black",width:500,height:500}}>
       <Calendar
  // 처음으로 선택되어질 날짜(현재날짜), Default = Date()
  current={'2020-08-25'}
  // 선택이 가능한 최소 날짜, 이 날짜 이전은 회색날짜로 표시됨, Default = undefined
  minDate={'2020-08-01'}
  // 선택이 가능한 최대 날짜, 이 날짜 이후는 회색날짜로 표시됨, Default = undefined
  maxDate={'2020-08-31'}
  // 날짜를 눌렀을 때 실행되는 함수, Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // 날짜를 길게 눌렀을 때 실행되는 함수, Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // 달력 제목에 표시될 월 형식, Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // 달력에서 보이는 월이 바뀔때 실행되는 함수, Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // 달 이동 화살표 숨기기, Default = false
  hideArrows={false}
  // 기본 화살표를 커스텀화살표로 대체 (방향은 '왼쪽'이나 '오른쪽')
  renderArrow={(direction) => direction === "left" ? (
    <Icon name="chevron-back-outline" size={20} color="#50cebb" />
      ) : (
    <Icon name="chevron-forward-outline" size={20} color="#50cebb" />
      )
  }
  // 이번 달 페이지에 다른 달 숫자를 보이지 않게 함, Default = false
  hideExtraDays={true}
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={7}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  disableArrowLeft={true}
  disableArrowRight={true}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  /** 기본 월 및 연도 제목을 사용자 지정 제목으로 바꿈. 함수는 매개변수로 day를 받는다. */
  // 이 부분을 주석처리 해주었더니 달력이 보여졌다. 이유는 아직도 모르겠다,,
  renderHeader={(date) => {/*Return JSX*/}}
  markingType={'period'}
  markedDates={{
    '2012-05-15': {marked: true, dotColor: '#50cebb'},
    '2012-05-16': {marked: true, dotColor: '#50cebb'},
    '2012-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
    '2012-05-22': {color: '#70d7c7', textColor: 'white'},
    '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
    '2012-05-24': {color: '#70d7c7', textColor: 'white'},
    '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
  }}
/>

      </View>
     )
   }
 

export default CalendarPage;