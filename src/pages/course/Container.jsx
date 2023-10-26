export default function container({ children }) {
	return (
		<div className="mt-5 rounded-[10px] border-[1.5px] py-[16px] px-[16px] overflow-auto h-full">
			{children}
		</div>
	);
}
