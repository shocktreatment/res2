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
          path="/res2/"
          element={<HomePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/res2/signup"
          element={
            <RestricedRoute component={SignupPage} redirectTo="/res2/cabinet" />
          }
        />
        <Route
          path="/res2/login"
          element={
            <RestricedRoute component={LoginPage} redirectTo="/res2/cabinet" />
          }
        />
        <Route
          path="/res2/tasks"
          element={<PrivateRoute component={TodosPage} redirectTo="/res2/login" />}
        />
        <Route
          path="/res2/cabinet"
          element={<PrivateRoute component={CabinetPage} redirectTo="/res2/login" />}
        />
        <Route
          path="/res2/posts/:id"
          element={
            <PrivateRoute component={SinglePostPage} redirectTo="/res2/login" />
          }
        >
          <Route path="comments" element={<CommentsPage />} />
        </Route>
        <Route
          path="/res2/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/res2/login" />
          }
        />
      </Routes>
    )
  );
};

export default UserRoutes;
