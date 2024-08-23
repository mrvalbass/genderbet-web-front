interface TextInputProps {
  type: string;
  placeholder: string;
  className?: string;
}

export default function TextInput({
  type,
  placeholder,
  className,
}: TextInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded px-2 py-1 ${className}`}
    />
  );
}
