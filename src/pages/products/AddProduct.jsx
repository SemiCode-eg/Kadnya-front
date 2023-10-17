import { useEffect, useState } from "react";
import Preview from "../../components/preview/Preview";

export default function AddProduct() {
  const initialContent = [
    {
      name: "course",
      color: "teal-300",
      active: false,
    },
    {
      name: "coaching",
      color: "red-300",
      active: false,
    },
    {
      name: "course",
      color: "orange-300",
      active: false,
    },
    {
      name: "course",
      color: "cyan-800",
      active: false,
    },
  ];

  const [content, setContent] = useState(initialContent);
  const [selectedColor, setSelectedColor] = useState("");

  const toggleActivation = (index) => {
    const updatedContent = content.map((item, i) => ({
      ...item,
      active: i === index ? !item.active : false,
    }));
    setContent(updatedContent);

    if (updatedContent[index].active) {
      setSelectedColor(updatedContent[index].color);
    } else {
      setSelectedColor("");
    }
  };

  useEffect(() => {
    toggleActivation(0)
  }, []);

  return (
    <div className="absolute inset-0 w-full flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-700 opacity-70"></div>
      <div className="bg-white shadow-md p-8 rounded-lg z-10 w-2/5">
        <h2 className="text-2xl font-semibold mb-4">New product</h2>
        <div className="grid grid-cols-2 gap-5 items-center justify-center p-8">
          {content.map((object, index) => (
            <div
              className={`w-40 h-full flex flex-col rounded-md cursor-pointer
              gap-2 border-2 hover:bg-sky-100 ${
                object.active
                  ? `border-2 border-sky-950 border-opacity-100 bg-sky-100`
                  : ""
              } items-center justify-between m-auto p-3 duration-150 ease-in-out border-opacity-50`}
              key={index}
              onClick={() => toggleActivation(index)}
            >
              <span
                className={`flex w-24 h-16 bg-${object.color}
                rounded-md mb-1`}
              ></span>
              <h1 className="text-base font-semibold capitalize">
                {object.name}
              </h1>
            </div>
          ))}
        </div>
        <div>
          <Preview color={selectedColor} />
        </div>
      </div>
    </div>
  );
}
