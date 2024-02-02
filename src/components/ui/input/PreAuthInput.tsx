// "use client";
// import images from "@/assets/images/images";
import React, { useMemo, useState } from "react";
// import PasswordRequirementPoints from "../passwordRequirementPoints/PasswordRequirementPoints";
// import InputError from "../errors/InputError";
import { useFormikContext } from "formik";
import { cva } from "class-variance-authority";

type InputProps = React.ComponentProps<"input">;

type Props = InputProps & {
  label: string;
  inputSize?: "small" | "medium";
  name: string;
};
interface MyFormValues {
  [key: string]: string | number | readonly string[] | undefined;
}

const input = cva("flex-1 rounded-lg w-full  bg-white outline-none", {
  variants: {
    intent: {
      primary: "",
    },
    size: {
      small: "px-[11px] py-[4.5px]",
      medium: "px-2 py-2",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

const PreAuthInput = ({ label, name, inputSize, type = "text" }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordCheckActive, setIsPasswordCheckActive] = useState(false);

  const { values, errors, handleChange } = useFormikContext<MyFormValues>();

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleFocus = () => {
    if (type !== "password") return;

    setIsPasswordCheckActive(true);
  };

  const handleBlur = () => {
    if (type !== "password") return;

    setIsPasswordCheckActive(false);
  };

  const updatedType = useMemo(() => {
    if (type === "password" && showPassword) {
      return "text";
    }
    return type;
  }, [showPassword, type]);

  // const eyeIcon = showPassword ? images.OpenEyeLid : images.closedEyeLid;

  return (
    <div>
      <label className="flex flex-col relative" htmlFor="Email-Address">
        <span className="text-sm font-bold text-[#212529] ml-2">{label}</span>
        <div className="flex items-center w-full border border-gray-400 rounded-lg shadow-md bg-white">
          <input
            className={input({ size: inputSize })}
            type={updatedType}
            name={name}
            onChange={handleChange}
            value={values[name]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {/* {type === "password" && name === "password" && (
            <PasswordRequirementPoints
              isPasswordCheckActive={isPasswordCheckActive}
              password={value}
            />
          )} */}
          {/* {type === "password" && (
            <button type="button" onClick={toggleShowPassword}>
              <img src={eyeIcon} alt="" className="pr-2" />
            </button>
          )} */}
        </div>
      </label>

      {/* <InputError error={errors[name]} />c */}
    </div>
  );
};

export default PreAuthInput;
