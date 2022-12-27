import React from 'react';
import { View } from 'react-native';

interface MySpacerProps {
  vertticalSpace?: number;
  horizontalSpace?: number;
}

function MySpacer({ vertticalSpace, horizontalSpace }: MySpacerProps) {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginVertical: vertticalSpace ? vertticalSpace / 2 : 5,
        marginHorizontal: horizontalSpace ? horizontalSpace / 2 : 5,
      }}
    />
  );
}

export default MySpacer;
