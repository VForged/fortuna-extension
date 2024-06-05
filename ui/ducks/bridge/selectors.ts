// Bridge selectors

import { createSelector } from 'reselect';
import { getBridgeFeatureFlags } from '../../../shared/modules/selectors';
import { BridgeFlag } from '../../pages/bridge/types/metabridge';

export const getIsBridgeEnabled = createSelector(
  getBridgeFeatureFlags,
  (bridgeFeatureFlags) => {
    console.log('====', bridgeFeatureFlags);
    return bridgeFeatureFlags?.[BridgeFlag.EXTENSION_SUPPORT];
  },
);
