import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface TextInputProps {
  type: string;
  placeholder: string;
  className?: string;
  value: string;
  setValue: (value: string) => void;
}

export default function TextInput({
  type,
  placeholder,
  className,
  value,
  setValue,
}: TextInputProps) {
  const [kind, setKind] = useState<string>(type);

  return (
    <div className="flex items-center relative">
      <input
        type={kind}
        placeholder={placeholder}
        className={`rounded px-2 py-1 w-full ${className}`}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {type === "password" && (
        <FontAwesomeIcon
          icon={kind === "password" ? faEye : faEyeSlash}
          className="absolute right-2"
          onClick={() =>
            setKind((prev) => (prev === "password" ? "text" : "password"))
          }
        />
      )}
    </div>
  );
}
