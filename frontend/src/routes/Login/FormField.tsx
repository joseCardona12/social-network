import { Eye } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface IFormFieldProps {
  title: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  isPassword?: boolean;
  type: string;
}
export default function FormField({
  title,
  placeholder,
  value,
  onChange,
  name,
  isPassword,
  type,
}: IFormFieldProps) {
  const [isTypePassword, setIsTypePassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-2">
      <h4>{title}</h4>
      {isPassword ? (
        <div className="relative w-full">
          <input
            name={name}
            type={isTypePassword ? "password" : "text"}
            className="bg-gray-50 p-2 rounded-md w-full"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {isPassword && (
            <button
              className="absolute top-1.5 right-1 bg-white p-1 rounded-md"
              type="button"
              onClick={() => setIsTypePassword(!isTypePassword)}
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        <input
          name={name}
          type={type}
          className="bg-gray-50 p-2 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
