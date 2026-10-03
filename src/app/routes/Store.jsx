import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/ui/hooks/state/auth/authSlice';
import ThemeReducer from '../../shared/state/ThemeSlice.jsx';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: ThemeReducer,
  },
});
