import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Customize from "./pages/website/customize/Customize";
import Website from "./pages/website/Website";
import Products from "./pages/products/Products";
// ---------- Css -------------
import "./App.css";
import AddProduct from "./pages/products/AddProduct";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [addForm, seAddForm] = useState(false);

  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleWindowResize = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex">
      {location.pathname === "/customize" ? (
        <div className={"w-full h-screen bg-white"}>
          <Customize />
        </div>
      ) : (
        <>
          {/* <div></div> */}
          <>
          {addForm === true && <AddProduct />}
            <div
              className={`w-full md:w-3/12 lg:w-2/12 sm:relative sm:top-0 
            absolute top-16 h-screen bg-gray-100 duration-300 ease-linear z-40 ${
              // isSidebarOpen ? "block" : "hidden"
              isSidebarOpen ? "left-0" : "sm:hidden -left-full"
            }`}
            >
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                closeSidebar={toggleSidebar}
              />
            </div>
            {/* Main Content */}
            <div
              className={`${
                isSidebarOpen
                  ? "w-full sm:w-9/12 md:w-9/12 lg:w-10/12"
                  : "w-full"
              } h-screen bg-white`}
            >
              <Navbar
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
              />
              <Routes>
                <Route path={"/website"} element={<Website />} />
                <Route
                  path={"/products"}
                  element={<Products showForm={() => seAddForm(!addForm)} />}
                />
              </Routes>
            </div>
          </>
        </>
      )}
    </div>
  );
}

export default App;

{
  /* {location.pathname === "/website" && <Website />} */
}
