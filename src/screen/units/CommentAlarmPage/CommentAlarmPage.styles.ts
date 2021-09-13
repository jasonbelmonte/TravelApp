import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 640px;
`;

export const Top = styled.View`
  /* display: flex; */
  flex-direction: row;
  margin: 22px 0 20px 0;
`;

export const Back = styled.Image`
  width: 9px;
  height: 15px;
  margin-left: 20px;
`;

export const TopTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* letter-spacing: -0.02; */
  margin-left: 35.2%;
`;

export const Bar = styled.View`
  border: 1px solid #a5a5a5;
  opacity: 0.5;
  margin-bottom: 14px;
`

export const Notice = styled.View`
  /* display: flex; */
  flex-direction: row;
  margin: 20px;
  justify-content: space-between;
`

export const NoticeImage = styled.Image`
  width: 20px;
  height: 17.33px;
  margin-top: 5px;
`

export const Contents = styled.View`
  width: 293px;
`

export const UserComment = styled.Text`
  font-weight: bold;
  font-size: 13.5px;
  line-height: 23px;
  margin-bottom: 5px;
`

export const Preview = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #A5A5A5;
`

export const Delete = styled.Image`
  width: 15px;
  height: 15px;
  margin-top: 5px;
`

export const Bar2 = styled.View`
  border: 1px solid #d5d5d5;
  opacity: 0.3;
  margin-bottom: 14px;
`