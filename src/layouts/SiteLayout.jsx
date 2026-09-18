import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-paper">
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
