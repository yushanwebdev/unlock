import BackArrowBtn from "./back-arrow-btn";
import PassRecord from "./pass-record";
import SearchInput from "./search-input";

export default function List() {
  return (
    <main className="relative z-[1px]">
      <div className="absolute z-[1px] h-[151px] primary-gradient-2 top-0 left-0 w-full blur-[267px]"></div>
      <div className="container flex items-center mt-10 mb-5 primary relative z-[2px]">
        <BackArrowBtn />
        <h1 className="mx-auto text-xl translate-x-[-20px] font-semibold text-secondary-950">
          My Vaults
        </h1>
      </div>
      <div className="container mb-5 relative z-[2px]">
        <SearchInput />
      </div>
      <div className="container-left relative z-[2px] mb-5 flex flex-row gap-2 overflow-scroll">
        <button className="px-5 py-1.5  text-white primary-gradient rounded-[45px] text-sm">
          All
        </button>
        <button className="px-5 py-1.5  text-secondary-950 bg-white rounded-[45px] text-sm">
          Recent
        </button>
        <button className="px-5 py-1.5  text-secondary-950 bg-white rounded-[45px] text-sm">
          Trending
        </button>
        <button className="px-5 py-1.5  text-secondary-950 bg-white rounded-[45px] text-sm whitespace-nowrap">
          Last Edit
        </button>
      </div>
      <div className="container relative z-[2px] gap-3 flex flex-col">
        <PassRecord />
        <PassRecord />
      </div>
    </main>
  );
}
