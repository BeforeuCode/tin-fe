import React, { FC } from 'react';
import { IIconProps } from './types';

export const MyInvitationsIcon: FC<IIconProps> = ({ isFocused }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 15.5832C13.5314 15.5832 15.5834 13.5311 15.5834 10.9998C15.5834 8.46853 13.5314 6.4165 11.0001 6.4165C8.46878 6.4165 6.41675 8.46853 6.41675 10.9998C6.41675 13.5311 8.46878 15.5832 11.0001 15.5832Z"
        stroke={isFocused ? '#F4F4F4' : '#242f7a'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 0.916504V2.74984"
        stroke={isFocused ? '#F4F4F4' : '#6092ee'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 19.25V21.0833"
        stroke={isFocused ? '#F4F4F4' : '#6092ee'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.86792 3.86841L5.16959 5.17007"
        stroke={isFocused ? '#F4F4F4' : '#6092ee'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8302 16.8301L18.1319 18.1317"
        stroke={isFocused ? '#F4F4F4' : '#6092ee'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.916748 11H2.75008"
        stroke={isFocused ? '#F4F4F4' : '#6092ee'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 11H21.0833"
        stroke={isFocused ? '#F4F4F4' : '#6092ee'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.86792 18.1317L5.16959 16.8301"
        stroke={isFocused ? '#F4F4F4' : '#6092ee'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8302 5.17007L18.1319 3.86841"
        stroke={isFocused ? '#F4F4F4' : '#6092ee'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
