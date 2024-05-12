import { ICustomInputProps } from "../../types/customInput";

const CustomInput = ({
  label,
  placeholder,
  type = "text",
  textArea,
  handlekeypress,
}: ICustomInputProps) => {
  return (
    <div className="grid grid-cols-1 gap-1">
      <label className="text-white text-lg">{label}</label>
      {textArea ? (
        <textarea
          className="w-full h-[100px] sm:h-[150px] rounded-md px-2 py-4 outline-none resize-none"
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          className={` rounded-md px-3 py-4 outline-none `}
          placeholder={placeholder}
          onKeyDown={handlekeypress}
          required
        />
      )}
    </div>
  );
};

export default CustomInput;
