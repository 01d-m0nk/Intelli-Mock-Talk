import { Footer } from "@/components/footer";
import Header from "@/components/header";
import AuthHanlder from "@/handlers/auth-handler";
import { Outlet, useLocation } from "react-router-dom";

export const PublicLayout = () => {
  const location = useLocation(); // get current route

  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <AuthHanlder />
      <Header />

      <Outlet />

      {/* Render footer everywhere except services page */}
      {location.pathname !== "/services" && <Footer />}
    </div>
  );
};
export default PublicLayout;