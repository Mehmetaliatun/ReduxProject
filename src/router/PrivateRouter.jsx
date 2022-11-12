import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true; // TODO: useSelector(user bilgisini okuyor)

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
