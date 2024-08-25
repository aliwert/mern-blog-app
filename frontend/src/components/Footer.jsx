const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="mt-10 w-full bg-slate-900 md:px-[500px] flex justify-between text-sm md:text-md py-8">
      <div className="flex flex-col text-purple-300">
        <span>@{year} All rights reserved</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
