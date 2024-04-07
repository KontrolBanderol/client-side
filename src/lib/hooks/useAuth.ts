import { useSelector, useDispatch } from 'react-redux';
import { setAuthInfo, selectAuth } from '../redux/slices/authSlice';
import { AppDispatch } from '../redux/store';
import UserData from '../redux/features/interfaces/IUsers';

export function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector(selectAuth);

  const updateAuthInfo = (user: UserData | null, isSignedIn: boolean) => {
    dispatch(setAuthInfo({ user, isSignedIn }));
  };

  return { ...auth, updateAuthInfo };
}
