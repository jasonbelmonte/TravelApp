import {Button, ScrapButton} from './ScrapMark.styles';
import React from 'react';
export default function ScrapMarkUI(props) {
  return (
    <Button onPress={props.scrap}>
      {props.isScrapped && (
        <ScrapButton
          source={require('../../../Assets/Images/IconScrap_Y.png')}
          resizeMode="cover"
        />
      )}
      {!props.isScrapped && (
        <ScrapButton
          source={require('../../../Assets/Images/IconScrap_G.png')}
          resizeMode="cover"
        />
      )}
    </Button>
  );
}
