"use client";

import useUnlockStore from "@/app/store";
import Papa from "papaparse";

export default function PasswordCSVUploader() {
  const { setVaults } = useUnlockStore();

  return (
    <input
      type="file"
      className="absolute top-0 left-0 w-full h-full opacity-0"
      onChange={(e) => {
        const file = e.target.files?.[0];

        if (file) {
          Papa.parse<string[]>(file, {
            complete: function (results) {
              console.log(results);

              // store the results.data to the `useUnlockStore` using the `setVaults` zustand action
              setVaults(results.data);
            },
          });
        }
      }}
    />
  );
}
