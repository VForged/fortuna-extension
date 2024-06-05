import { fetchBridgeFeatureFlags } from '../../pages/bridge/bridge.util';
import { setBridgeFeatureFlags } from '../../store/actions';
import { MetaMaskReduxDispatch } from '../../store/store';
import { swapsSlice } from '../swaps/swaps';
import { bridgeSlice } from './bridge';

// Bridge actions

const {} = swapsSlice.actions;

export const {} = bridgeSlice.actions;

export const fetchAndSetBridgeFeatureFlags = () => {
  return async (dispatch: MetaMaskReduxDispatch) => {
    const bridgeFeatureFlags = await fetchBridgeFeatureFlags();
    await dispatch(setBridgeFeatureFlags(bridgeFeatureFlags));
  };
};
