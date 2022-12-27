import React from 'react';
import { View } from 'react-native';

interface MySpacerProps {
  vertticalSpace?: number;
  horizontalSpace?: number;
}

function MySpacer({ vertticalSpace, horizontalSpace }: MySpacerProps) {
  return (
    <View
      style={{
        marginVertical: vertticalSpace ? vertticalSpace / 2 : undefined,
        marginHorizontal: horizontalSpace ? horizontalSpace / 2 : undefined,
      }}
    />
  );
}

export default MySpacer;
