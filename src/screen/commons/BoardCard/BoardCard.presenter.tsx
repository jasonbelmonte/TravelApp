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
import ScrapMark from '../ScrapMark/ScrapMark.container';
export default function BoardCardUI(props: any) {
  // const [myMenu, setMyMenu] = useState('') // myMenu = "유럽"

  const [hasMore, setHasMore] = useState(true);

  const onLoadMore = () => {
    if (!props.data) return;
    // console.log(props.data?.fetchBoards.length);
    // console.log(Math.ceil(props.data?.fetchBoards.length / 10) + 1);
    props.fetchMore({
      variables: {
        page: Math.ceil(props.data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    //       {/* {props.data?.fetchBoards.filter((data) => data.location.area === myMenu) && (
    //         <FlatList
    //           data={props.data.fetchBoards.filter((data) => data.location.area === myMenu)}
    <CardWrapper>
      <FlatList
        data={props.data?.fetchBoards}
        keyExtractor={item => item._id}
        onEndReached={(hasMore && onLoadMore) || null}
        onEndReachedThreshold={1}
        renderItem={({item}) => {
          return (
            <CardWrap key={item._id}>
              <Card id={item._id}>
                <CardLeft onPress={props.goToBoardDetail(item._id)}>
                  <CardTitle>
                    {item?.title.length >= 24
                      ? item?.title.substr(0, 24) + '..'
                      : item?.title}
                  </CardTitle>

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
                    <ScrapMark _id={item._id} />
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
