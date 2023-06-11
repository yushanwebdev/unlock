import IconDocumentUpload from "@/components/icon-document-upload";
import PasswordCSVUploader from "./password-csv-uploader";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-white">
        <h1 className="text-xl font-semibold">Hello Yushan 👋</h1>
        <p className="text-sm">Welcome back again!</p>
      </div>
      <div className="p-2 bg-white rounded-full relative z-[1]">
        <IconDocumentUpload />
        <PasswordCSVUploader />
      </div>
    </div>
  );
}
