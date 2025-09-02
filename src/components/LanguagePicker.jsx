import React from "react";

const LanguagePicker = () => {
  const [language, setLanguage] = useState("english");

  return (
    <div className="absolute ml-96 h-full rounded-full text-light flex items-center justify-center flex-col gap-4 px-4 font-sourceCode">
      <button
        className={`w-1/2 flex flex-col items-center justify-center tilt-hover ${
          language === "english" ? "underline font-[600]" : null
        }`}
      >
        <span>EN</span>
      </button>
      <button className="w-1/2 flex flex-col items-center justify-center tilt-hover">
        <span>PL</span>
      </button>
    </div>
  );
};

export default LanguagePicker;
