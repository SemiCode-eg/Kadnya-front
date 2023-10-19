/* eslint-disable react/prop-types */
import { CaretRight } from "@phosphor-icons/react";
import { NavLink, useLocation } from "react-router-dom";

export default function MiniSide({ tabs, Outlet }) {
	const location = useLocation();
	const path = location.pathname.replace(/^\/products\//, "");

	return (
		<div className="flex gap-5">
			<div className="miniSide mr-5 border-r-2 pr-4">
				<div className="miniSide-content">
					<ul className={"flex gap-3 flex-col"}>
						{tabs.map((tab, index) => (
							<NavLink
								key={index}
								to={tab.path}
								className={({
									isActive,
								}) => `cursor-pointer px-3 py-2 flex justify-between
                font-medium rounded-r-lg w-40 transition-all duration-300 ease-in
                hover:bg-gradient-to-r hover:from-violet-200 hover:to-teal-300 ${
									isActive
										? `bg-gradient-to-r from-violet-200 to-teal-300 
                     text-sky-950`
										: ``
								}`}
							>
								{tab.title}
								{path === tab.path && <CaretRight size={22} weight="bold" />}
							</NavLink>
						))}
					</ul>
				</div>
			</div>
			<div className="mainContent w-full">{<Outlet />}</div>
		</div>
	);
}
