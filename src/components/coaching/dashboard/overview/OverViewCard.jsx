/* eslint-disable react/prop-types */

function OverViewCard({
  title,
  icon,
  count,
  backgroundColor,
  iconColor,
  isRevenue = false,
}) {
  return (
    <div className="border p-4 flex gap-2 items-start rounded-[10px] shadow-sm">
      <div
        className="rounded-[10px] flex justify-center items-center w-[60px] h-[60px]"
        style={{ backgroundColor: backgroundColor, color: iconColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col items-start">
        <p className="whitespace-pre-wrap capitalize text-start">
          {title}
          {isRevenue && (
            <span className="text-neutral-400 text-xs font-normal ml-1">
              in last 30 days
            </span>
          )}
        </p>
        <p className="font-bold text-2xl">{isRevenue ? `$${count}` : count}</p>
      </div>
    </div>
  );
}

export default OverViewCard;
