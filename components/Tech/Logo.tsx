import { Logos } from "@/components/Logos/Logos";

interface LogoProps {
  name: string;
}

export const Logo = ({ name }: LogoProps) => {
  const found = Logos.find((l) => l.name === name);

  if (!found) return null;

  return (
    <div
      className="logo px-2 py-2 rounded-md hover:bg-[#5654496a] transition-colors duration-200 ease-in-out cursor-pointer flex justify-center items-center"
      title={name}
    >
      {typeof found.url === "string" ? (
        <img src={found.url} alt={name} width={60} />
      ) : (
        found.url
      )}
    </div>
  );
};
