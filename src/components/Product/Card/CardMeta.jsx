import { CalendarBlank, Users } from "@phosphor-icons/react";

/* eslint-disable react/prop-types */
export default function CardMeta({ date, subscribersCount }) {
	return (
		<>
			<p className="text-sm text-sky-950 text-opacity-50 flex gap-2 font-medium items-center">
				<CalendarBlank size={24} weight="bold" />
				{date}
			</p>
			<p className="text-sm font-semibold text-sky-950 text-opacity-80 mt-2 flex gap-2 items-center">
				<Users size={24} weight="bold" />
				{subscribersCount} Subscribers
			</p>
		</>
	);
}
