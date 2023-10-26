import { IconButton, Menu } from "@mui/material";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import MenuItems from "./MenuItems";

/* eslint-disable react/prop-types */
export default function SettingMenu({
	anchorElement = null,
	handleOpenMenu = () => {},
	handleCloseMenu = () => {},
	menuItems = [],
}) {
	const open = Boolean(anchorElement);

	return (
		<>
			<IconButton
				id="setting-menu-button"
				aria-controls={open ? "setting-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleOpenMenu}
			>
				<DotsThreeOutlineVertical size={28} />
			</IconButton>
			<Menu
				id="setting-menu"
				anchorEl={anchorElement}
				open={open}
				onClose={handleCloseMenu}
				MenuListProps={{
					"aria-labelledby": "setting-menu-button",
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItems items={menuItems} />
			</Menu>
		</>
	);
}
