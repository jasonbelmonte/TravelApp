import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {
  Button,
  CardWrapper,
  CardWrap,
  Card,
  CardLeft,
  CardRight,
  ScrapButton,
  CardTitle,
  CardMiddle,
  CardMiddleContents,
  LocationImg,
  CardMiddleText,
  CardWriter,
  WriterPhoto,
  WriterName,
  ImageBox,
} from './BoardCard.styles';

export default function BoardCardUI(props: any) {
  // const [myMenu, setMyMenu] = useState('') // myMenu = "유럽"
  console.log(props.data);
  // const [aaa, setAaa] = useState();

  // const handleLoadMore = () => {};

  return (
    //       {/* {props.data?.fetchBoards.filter((data) => data.location.area === myMenu) && (
    //         <FlatList
    //           data={props.data.fetchBoards.filter((data) => data.location.area === myMenu)}
    <CardWrapper>
      <FlatList
        data={props.data?.fetchBoards}
        // onEndReached={}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return (
            <CardWrap>
              <Card key={item._id} id={item._id}>
                <CardLeft>
                  <CardTitle>{item?.title.substr(0, 27) + '...'}</CardTitle>
                  <CardMiddle>
                    <LocationImg
                      source={require('../../../Assets/Images/IconLocation.png')}
                    />
                    <CardMiddleContents>
                      <CardMiddleText>
                        {item?.location?.area}
                      
                        {item?.location?.country}
                        {', '}
                        {item?.location?.city}
                      </CardMiddleText>
                      <CardMiddleText>
                        {item?.startDate.substr(0, 10)}
                        {' ~ '}
                        {item?.endDate.substr(0, 10)}
                      </CardMiddleText>
                    </CardMiddleContents>
                  </CardMiddle>
                  <CardWriter>
                    <WriterPhoto>
                      <ImageBox
                        source={require('../../../Assets/Images/IconUserPhoto.png')}
                      />
                    </WriterPhoto>
                    <WriterName>{item?.writer.name}</WriterName>
                  </CardWriter>
                </CardLeft>
                <CardRight>
                  <Button onPress={props.scrapBtn}>
                    <ScrapButton
                      source={require('../../../Assets/Images/IconScrap_G.png')}
                      resizeMode="cover"
                    />
                  </Button>
                </CardRight>
              </Card>
            </CardWrap>
          );
        }}
      />
    </CardWrapper>
  );
}
