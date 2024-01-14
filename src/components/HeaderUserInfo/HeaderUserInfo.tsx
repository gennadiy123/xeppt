import { ReactComponent as NotificationsSvg } from '../../assets/images/notification.svg';
import { ReactComponent as ProfileSvg } from '../../assets/images/profile.svg';
import { ReactComponent as ArrowSvg } from '../../assets/images/arrow.svg';
import { Wrapper, Text, Div } from './HeaderUserInfo.styles';

export const HeaderUserInfo = () => {
  return (
    <Wrapper>
      <Text>FR</Text>
      <NotificationsSvg />
      <Div>
        <ProfileSvg />
        <Text className="username">PETER MORGAN</Text>
        <ArrowSvg />
      </Div>
    </Wrapper>
  );
};
