import React from 'react';
import { Icon, IconProps } from '@rneui/themed';

import { useTheme } from '../../theme/ThemeProvider';

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5';

export interface MyIconProps extends IconProps {
  name: string;
  type?: IconType;
  size?: number;
  color?: string;
}

function MyIcon({
  name,
  type = 'font-awesome',
  size = 30,
  color,
  ...props
}: MyIconProps) {
  const { colors } = useTheme();

  return (
    <Icon
      name={name}
      type={type}
      size={size}
      color={color ? color : colors.text}
      {...props}
    />
  );
}

export default MyIcon;
