import { useContext } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.h1<{ $theme: Theme }>`
    ${sharedStyles};
    font-size: 6rem;
    margin: 0;
    color: ${({ $theme }) => $theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 4.5rem;
    }
  `,
  Title: styled.h2<{ $theme: Theme }>`
    ${sharedStyles};
    font-size: 3.5rem;
    margin: 4rem 0;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2.5rem;
    }
  `,
};

export const Content = () => {
  const { config, theme } = useContext(AppContext);
  const imgStyle = {
    zIndex: '1',
    borderRadius: '50%'
  };
  return (
    <>
      <img 
      style={imgStyle}
      width="200" height="200" src="https://media.licdn.com/dms/image/v2/D4D03AQErHmBY7XWduA/profile-displayphoto-shrink_800_800/B4DZZo7QICHwAc-/0/1745517086020?e=1764201600&v=beta&t=rTB1RAgt92ikLy3rvP3J0JAzMfBQech7j6jo7fud9qM" alt="Vineeth Kalyan Cheppalli" ></img>
      <C.Name data-v2="name" $theme={theme}>
        {config.name.display}
      </C.Name>
      <C.Title data-v2="title" $theme={theme}>
        {config.title.display}
      </C.Title>
    </>
  );
};
