"use client";

import PassRecord from "./pass-record";
import SearchInput from "./search-input";
import useUnlockStore from "@/app/store";

export default function VaultBlock() {
  const { vaults } = useUnlockStore();

  const renderVaults = () => {
    return vaults.map((vault, index) => {
      const filteredVault = vault.filter(Boolean);

      return (
        <PassRecord
          key={index}
          name={filteredVault[0]}
          username={filteredVault[1]}
          password={filteredVault[2]}
        />
      );
    });
  };

  return (
    <div>
      <div className="mb-5">
        <SearchInput />
      </div>
      <div className="flex flex-col gap-3">{renderVaults()}</div>
    </div>
  );
}
