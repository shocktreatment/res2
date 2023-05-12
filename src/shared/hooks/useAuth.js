import { useSelector } from "react-redux";

import {
  selectIsCurrent,
  selectIsLogin,
  selectUser,
} from "../../redux/auth/auth-selectors";

export const useAuth = () => {
  return {
    isLogin: useSelector(selectIsLogin),
    user: useSelector(selectUser),
    isCurrent: useSelector(selectIsCurrent),
  };
};
