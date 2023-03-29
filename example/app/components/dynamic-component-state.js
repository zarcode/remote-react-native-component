import React, {useMemo, Suspense} from 'react';
import {Text, View} from 'react-native';
import {fetchComponent} from '../utils';
import {useDispatch, useSelector} from 'react-redux';

const DynamicComponentFromState = ({__id, children, ...props}) => {
  const components = useSelector(state => state.components);

  const Component = useMemo(() => {
    return React.lazy(async () => components[__id]);
  }, [__id]);

  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading...</Text>
        </View>
      }>
      <Component {...props}>{children}</Component>
    </Suspense>
  );
};

export default React.memo(DynamicComponentFromState);
