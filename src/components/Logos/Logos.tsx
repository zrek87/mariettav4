import Image from "next/image";
import { Logoslist } from "./Logoslist";

export default function Logos(): JSX.Element {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6x1 px-0 lg:px-12 p-3">
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
          {Logoslist.map((pl) => (
            <Image
              key={pl.path}
              className="mt-8 h-10 w-auto object-contain transition duration-300"
              src={pl.path}
              alt={pl.alt}
              width={158}
              height={48}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
