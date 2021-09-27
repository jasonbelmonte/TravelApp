import React from 'react';
import CommentAlarmPageUI from './CommentAlarmPage.presenter';
// import MapView from 'react-native-maps';

export default function CommentAlarmPage({navigation}) {
  // if (BoasrdComment) {
  //   dispatch(
  //     BoasrdCommentActions.editPost(BoasrdComment_id, {
  //       comment_cnt: parseInt(BoasrdComment.comment_cnt) + 1,
  //     })
  //   );

  //   _onClick={() =>
  //     {history.push(`/BoasrdComment/${BoasrdComment_id}`);}}

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <CommentAlarmPageUI
      goBack={goBack}
      // BoasrdComment={BoasrdComment}
    />
  );
}
