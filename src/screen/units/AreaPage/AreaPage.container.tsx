import React from 'react';
import AreaPageUI from './AreaPage.presenter';
export default function AreaPage({navigation, route}) {
  const goToSearch = () => {
    navigation.navigate('Search', {area: route?.params?.area});
  };

  const goToCommetAlarm = () => {
    navigation.navigate('CommentAlarmpage');
  };
  const goToWrite = () => {
    navigation.navigate('Write');
  };

  return (
    <AreaPageUI
      navigation={navigation}
      goToSearch={goToSearch}
      goToCommetAlarm={goToCommetAlarm}
      area={route?.params?.area}
      goToWrite={goToWrite}
    />
  );
}
