import type {
  ReduxStoreWithManager, StateSchema, ThunkConfig, ThunkExtraArg,
} from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkExtraArg,
  ThunkConfig,
};
