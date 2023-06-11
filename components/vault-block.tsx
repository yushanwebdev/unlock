import PassRecord from "@/app/list/pass-record";
import SearchInput from "@/app/list/search-input";

export default function VaultBlock() {
  return (
    <div className="">
      <div className="mb-5">
        <SearchInput />
      </div>
      <div className="flex flex-col gap-3">
        <PassRecord />
        <PassRecord />
      </div>
    </div>
  );
}
