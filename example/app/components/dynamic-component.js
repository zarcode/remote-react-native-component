import React, {useMemo, Suspense} from 'react';
import {Text, View} from 'react-native';
import {fetchComponent} from '../utils';
import {ErrorBoundary} from 'react-error-boundary';

const DynamicComponent = ({__id, children, ...props}) => {
  const Component = useMemo(() => {
    return React.lazy(async () => fetchComponent(__id));
  }, [__id]);

  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading...</Text>
        </View>
      }>
      <ErrorBoundary fallback={<Text>Something went wrong</Text>}>
        <Component {...props}>{children}</Component>
      </ErrorBoundary>
    </Suspense>
  );
};

export default React.memo(DynamicComponent);
