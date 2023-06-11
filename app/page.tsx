import Header from "@/components/header";
import VaultWidget from "@/components/vault-widget";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary-950 relative z-[1] pt-8 flex flex-col">
      <div className="relative z-[2] container mb-6">
        <Header />
      </div>

      <div className="relative z-[2] bg-grayOne flex-1 rounded-t-[40px] rounded-tr-[40px] py-5 container">
        <VaultWidget />
      </div>

      {/* Home Background */}
      <div className="absolute z-[1] top-[0] left-[0]">
        <Image
          src="/img/bg-ellipse-one.png"
          width={346}
          height={346}
          alt="Unlock Background"
        />
      </div>
      <div className="absolute z-[1] top-[0] right-[0]">
        <Image
          src="/img/bg-ellipse-two.png"
          width={346}
          height={346}
          alt="Unlock Background"
        />
      </div>
    </main>
  );
}
