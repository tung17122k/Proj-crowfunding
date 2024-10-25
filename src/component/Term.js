import React from "react";
import { Checkbox } from "./checkbox";
import useToggleValue from "hooks/useToggleValue";

const Term = () => {
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <div className="flex items-start gap-5 mb-5">
      <Checkbox name="term" checked={acceptTerm} onChange={handleToggleTerm}>
        <p className="flex-1 text-xs select-none lg:text-sm text-text2 dark:text-text3">
          I agree to the{" "}
          <span className="underline text-secondary ">Terms of Use</span> and
          have read and understand the{" "}
          <span className="underline text-secondary">Privacy policy</span>.
        </p>
      </Checkbox>
    </div>
  );
};

export default Term;
