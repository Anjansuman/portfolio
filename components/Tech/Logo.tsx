import { Logos } from "@/components/Logos/Logos";

interface LogoProps {
  name: string;
}

export const Logo = ({ name }: LogoProps) => {
  const found = Logos.find((l) => l.name === name);

  if (!found) return null;

  return (
    <div
      className="logo size:16 2xl:size-18 rounded-md hover:bg-[#5654496a] transition-colors duration-200 ease-in-out cursor-pointer flex justify-center items-center flex-shrink-0 "
      // title={name}
    >
      {typeof found.url === "string" ? (
        <img src={found.url} alt={name} width={60} />
      ) : (
        found.url
      )}
    </div>
  );
};