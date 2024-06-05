import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAndSetBridgeFeatureFlags } from '../../ducks/bridge/actions';

// For background processes
const useBridging = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAndSetBridgeFeatureFlagsWrapper = async () => {
      await dispatch(fetchAndSetBridgeFeatureFlags());
    };
    fetchAndSetBridgeFeatureFlagsWrapper();
  }, [dispatch]);
};
export default useBridging;
