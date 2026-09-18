import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Fait fonctionner les ancres (#projets, #contact) après une navigation entre pages.
export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView();
  }, [hash, pathname]);

  return null;
}
