import IconSearch from "./icon-search";

export default function SearchInput() {
  return (
    <div className="relative z-[1px]">
      <div className="absolute -translate-y-1/2 top-1/2 left-3">
        <IconSearch />
      </div>
      <input
        type="text"
        placeholder="Search your vaults"
        className="w-full pl-10 pr-3 py-3.5 text-sm font-normal placeholder-secondary-400 bg-white border-gray-300 appearance-none text-secondary-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-2xl"
      />
    </div>
  );
}
