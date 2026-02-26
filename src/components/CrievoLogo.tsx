import Image from "next/image";

export default function CrievoLogo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/crievo.svg"
      alt="Crievo"
      width={size}
      height={size}
      priority
    />
  );
}
