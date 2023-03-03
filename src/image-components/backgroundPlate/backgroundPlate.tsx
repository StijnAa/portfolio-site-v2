import Head from "next/head";
import Image from "next/image";

export default function BackgroundPlate() {
  return (
    <div className="bg-plate">
      <Image
        src="/assets/japanse-zee---bg-v2_0001s_0002_Layer-3.png"
        fill={true}
        objectFit="cover"
        alt="bg"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 100vw,
        100vw"
      />
    </div>
  );
}
