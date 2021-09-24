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
  MoreText
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
      {props.data?.fetchBoardsIWrote.map((item, index) => {
        return (
          <CardWrap key={index}>
            <Card>
              <CardLeft>
                <CardTitle>{item?.title.substr(0, 27) + '...'}</CardTitle>
                <CardMiddle>
                  <LocationImg
                    source={require('../../../Assets/Images/IconLocation.png')}
                  />
                  <CardMiddleContents>
                    <CardMiddleText>
                      {item?.location?.area}
                      {', '}
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
                  <WriterName onPress={props.gotoUserpage(item.writer._id)}>{item?.writer.name}</WriterName>
                </CardWriter>
              </CardLeft>
              <CardRight></CardRight>
            </Card>
          </CardWrap>
        );

      })}
      {/* <Button onPress={props.onLoadMore}><MoreText>더보기</MoreText></Button> */}
    </CardWrapper>
  );
}
