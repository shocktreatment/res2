import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentUser } from "../../redux/auth/auth-operations";
import { useAuth } from "../hooks/useAuth";

import HomePage from "../../pages/HomePage";
import SignupPage from "../../pages/SignupPage";
import LoginPage from "../../pages/LoginPage";
import TodosPage from "../../pages/TodosPage";
import CabinetPage from "../../pages/CabinetPage";
import ContactsPage from "../../pages/ContactsPage";
import RestricedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import SinglePostPage from "../../pages/SinglePostPage/SinglePostPage";
import CommentsPage from "../../pages/CommentsPage/CommentsPage";
import NotFoundPage from "../../pages/NotFoundPage";

const UserRoutes = () => {
  const dispatch = useDispatch();
  const { isCurrent } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    !isCurrent && (
      <Routes>
        <Route
          path="/https://shocktreatment.github.io/"
          element={<HomePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/signup"
          element={
            <RestricedRoute component={SignupPage} redirectTo="/cabinet" />
          }
        />
        <Route
          path="/login"
          element={
            <RestricedRoute component={LoginPage} redirectTo="/cabinet" />
          }
        />
        <Route
          path="/tasks"
          element={<PrivateRoute component={TodosPage} redirectTo="/login" />}
        />
        <Route
          path="/cabinet"
          element={<PrivateRoute component={CabinetPage} redirectTo="/login" />}
        />
        <Route
          path="/posts/:id"
          element={
            <PrivateRoute component={SinglePostPage} redirectTo="/login" />
          }
        >
          <Route path="comments" element={<CommentsPage />} />
        </Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
      </Routes>
    )
  );
};

export default UserRoutes;
