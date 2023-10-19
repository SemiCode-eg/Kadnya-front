import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Customize from "./pages/website/customize/Customize";

function RootLayout() {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

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
							<main>
								<Outlet />
							</main>
						</div>
					</>
				</>
			)}
		</div>
	);
}

export default RootLayout;
