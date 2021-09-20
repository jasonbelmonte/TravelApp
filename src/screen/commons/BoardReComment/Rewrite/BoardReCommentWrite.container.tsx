import React, {useState} from 'react';
import BoardReCommentWriteUI from './BoardReCommentWrite.presenter';

export default function BoardReCommentWrite() {
  const [isEmpty, setIsEmpty] = useState(false);

  const onChangeColor = () => {
    if (isEmpty === false) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  return <BoardReCommentWriteUI onChangeColor={onChangeColor} />;
}
