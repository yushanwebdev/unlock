import AppleLogo from "../logos/apple";
import IconHeartGray from "./icon-heart-gray";
import PassInStars from "./pass-in-stars";

export default function PassRecord() {
  return (
    <div className="flex items-center p-3 bg-white rounded-2xl">
      <div className="w-16 px-5 py-3.5 bg-grayOne rounded-xl mr-3.5">
        <AppleLogo />
      </div>
      <div>
        <h3 className="mb-1 text-secondary-950">Apple</h3>
        <p className="mb-1 text-xs text-secondary-950 opacity-70">
          hello@designmonk.com
        </p>
        <div className="flex items-center gap-2">
          <PassInStars />
          <button className="text-xs">🔓</button>
        </div>
      </div>
      <div className="ml-auto">
        <IconHeartGray />
      </div>
    </div>
  );
}
