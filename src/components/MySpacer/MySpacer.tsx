import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

interface MySpacerProps {
  vertticalSpace?: number;
  horizontalSpace?: number;
  showBorder?: boolean;
  style?: ViewStyle;
}

function MySpacer({ vertticalSpace, horizontalSpace, showBorder, style }: MySpacerProps) {
  const { colors } = useTheme();
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginVertical: vertticalSpace ? vertticalSpace / 2 : undefined,
        marginHorizontal: horizontalSpace ? horizontalSpace / 2 : undefined,
        borderTopWidth: showBorder ? 1 : 0,
        borderColor: colors.grayBorder,
        width: showBorder ? '100%' : 0,
        ...style,
      }}
    />
  );
}

export default React.memo(MySpacer);
