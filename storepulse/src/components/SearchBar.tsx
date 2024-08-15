
const SearchBar = () => {
  return (
    <div className="flex items-center bg-transparent px-6 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.5 9a7.5 7.5 0 01.15 10.35z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search for task and etc."
        className="ml-2 bg-inherit focus:outline-none text-[#BCCDD9] placeholder-[#BCCDD9]"
      />
    </div>
  );
};

export default SearchBar;
