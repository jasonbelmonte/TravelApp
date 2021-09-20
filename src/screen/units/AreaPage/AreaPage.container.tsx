import React from 'react';
import AreaPageUI from './AreaPage.presenter';
export default function AreaPage({navigation}) {
  const goToSearch = () => {
    navigation.navigate('Search');
  };

  const goToCommetAlarm = () => {
    navigation.navigate('CommentAlarmpage');
  };

  return (
    <AreaPageUI
      navigation={navigation}
      goToSearch={goToSearch}
      goToCommetAlarm={goToCommetAlarm}
    />
  );
}
