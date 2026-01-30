import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { checkAuth, authUser, isCheckingAuth,onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();
  console.log({onlineUsers});
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (!authUser && isCheckingAuth)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="size-10 animate-spin"></Loader>
      </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            authUser ? <HomePage></HomePage> : <Navigate to="/login"></Navigate>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            !authUser ? <SignUpPage></SignUpPage> : <Navigate to="/"></Navigate>
          }
        ></Route>
        <Route
          path="/login"
          element={
            !authUser ? <LoginPage></LoginPage> : <Navigate to="/"></Navigate>
          }
        ></Route>
        <Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>
        <Route
          path="/profile"
          element={
            authUser ? (
              <ProfilePage></ProfilePage>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
      </Routes>

      <Toaster></Toaster>
    </div>
  );
};

export default App;
