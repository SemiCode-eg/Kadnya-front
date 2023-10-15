export default function Preview({color}) {
  const circles = [
    {
      color: color,
    },
  ];
  return (
    <div className="bg-gray-200 h-52 rounded-t-lg">
      <div
        className="flex flex-row p-4 bg-white
            items-start justify-start gap-2 w-full
            rounded-t-lg border border-b-0 border-gray-200"
      >
        {circles.map((circle, index) => (
          <>
            <span
              key={index}
              className={`w-2 h-2 bg-${circle.color} rounded-xl`}
            ></span>
            <span
              key={index}
              className={`w-2 h-2 bg-${circle.color} rounded-xl`}
            ></span>
            <span
              key={index}
              className={`w-2 h-2 bg-${circle.color} rounded-xl`}
            ></span>
          </>
        ))}
      </div>
    </div>
  );
}