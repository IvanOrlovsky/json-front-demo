"use client";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { InfoOutlined } from "@mui/icons-material";

export default function InfoHint({ hint }: { hint: string }) {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<div>
			<div
				aria-owns={open ? "mouse-over-popover" : undefined}
				aria-haspopup="true"
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				<InfoOutlined sx={{ color: "#8591A9" }} />
			</div>
			<Popover
				id="mouse-over-popover"
				sx={{
					pointerEvents: "none",
					backgroundColor: "black",
					opacity: "50%",
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<Typography sx={{ p: 1 }}>{hint}</Typography>
			</Popover>
		</div>
	);
}
