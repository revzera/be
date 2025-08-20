import Image from "next/image";

export default function Home() {
  return (<Image
          src="/elemesmo.jpg"
          alt="Next.js logo"
          width={500}
          height={136}
          priority
        />
  );
}

