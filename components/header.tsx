import IconDocumentUpload from "@/app/icon-document-upload";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-white">
        <p className="text-xl font-semibold">Hello Yushan 👋</p>
        <p className="text-sm">Welcome back again!</p>
      </div>
      <button className="p-2 bg-white rounded-full">
        <IconDocumentUpload />
      </button>
    </div>
  );
}
