export default function SettingSection({ link, text, index }) {
  return (
    <a
      href={link}
      className={`bg-white p-4 py-5 pl-6 w-full
            flex items-center space-x-4 transition duration-300 
            transform border-gray-300 border-b cursor-pointer`}
    >
      <span className="text-gray-800 font-normal text-sm">{text}</span>
    </a>
  )
}
