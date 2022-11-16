import React from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
function Spinner() {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        class="
    spinner-border
    animate-spin
    inline-block
 mt-24
    w-16
    h-16
    border-4
    rounded-full
    text-purple-500
  "
        role="status"
      ></div>
      <span class="text-xl">Loading...</span>
    </div>
  );
}

export default Spinner;
