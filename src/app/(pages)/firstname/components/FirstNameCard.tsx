import TextInput from "@/app/components/TextInput";

interface FirstNameCardProps {
  className: string;
  symbol: string;
  names: string[];
  setNames: (name: string[]) => void;
}

export default function FirstNameCard({
  className,
  symbol,
  names,
  setNames,
}: FirstNameCardProps) {
  const setName1 = (name1: string) => setNames([name1, ...names.slice(1)]);
  const setName2 = (name2: string) => setNames([names[0], name2, names[2]]);
  const setName3 = (name3: string) => setNames([...names.slice(0, 2), name3]);

  return (
    <div
      className={`py-5 px-10 flex gap-5 md:gap-10 justify-center items-center flex-col md:flex-row md:bg-gradient-to-r bg-gradient-to-b rounded-lg md:h-28 ${className}`}
    >
      <p className="font-bold text-6xl text-white  md:mx-5">{symbol}</p>
      <TextInput
        type="text"
        placeholder="Prénom 1"
        value={names[0]}
        setValue={setName1}
      />
      <TextInput
        type="text"
        placeholder="Prénom 2"
        value={names[1]}
        setValue={setName2}
      />
      <TextInput
        type="text"
        placeholder="Prénom 3"
        value={names[2]}
        setValue={setName3}
      />
    </div>
  );
}
