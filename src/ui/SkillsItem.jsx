function SkillsItem({ text, children }) {
  return (
    <div className="mb-4 md:mb-7">
      {" "}
      <h3 className="mb-2 font-inter text-xl font-semibold tracking-tighter transition-all duration-700 ease-in-out hover:text-third-new md:mb-2.5 md:text-3xl">
        {text}
      </h3>
      <div className="ml-2 cursor-pointer text-base font-medium tracking-normal md:ml-5 md:text-xl md:tracking-wide">
        {children}
      </div>
    </div>
  );
}

export default SkillsItem;
