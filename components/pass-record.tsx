import { useState } from "react";
import AppleLogo from "../app/logos/apple";
import IconHeartGray from "../app/list/icon-heart-gray";
import PassInStars from "./pass-in-stars";

interface IPassRecordProps {
  name: string;
  username: string;
  password: string;
}

export default function PassRecord({
  name,
  username,
  password,
}: IPassRecordProps) {
  const [isHide, setIsHide] = useState(true);

  return (
    <div className="flex items-center p-3 bg-white rounded-2xl">
      <div className="w-16 px-5 py-3.5 bg-grayOne rounded-xl mr-3.5 min-w-[64px]">
        <AppleLogo />
      </div>
      <div className="pr-2">
        <h3 className="mb-1 break-all text-secondary-950">{name}</h3>
        <p className="mb-1 text-xs text-secondary-950 opacity-70">{username}</p>
        <div className="flex items-center gap-2 text-xs text-secondary-400">
          {isHide ? <PassInStars /> : password}
          <button onClick={() => setIsHide((prev) => !prev)}>
            {isHide ? "🔒" : "🔓"}
          </button>
        </div>
      </div>
      <div className="ml-auto">
        <IconHeartGray />
      </div>
    </div>
  );
}
