import React from 'react';
import {Header} from 'react-native-elements';

const CustomHeader = ({children, style}) => (
  <Header containerStyle={style}>{children}</Header>
);

export default CustomHeader;
