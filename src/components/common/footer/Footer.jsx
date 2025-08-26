const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Approach", url: "work-process" },
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Skills", url: "skills" },
  { id: 6, name: "Experience", url: "experience" },
  { id: 7, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-20 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        {/* 2. PERSONALIZED LOGO & NAME */}
        {/* Replaced the image with a stylish text logo that matches your navbar */}
        <a href="#" className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <span className="text-4xl font-bold text-picto-primary">A</span>
          </div>
          <p className="text-3xl sm:text-[32px] my-auto ms-4 font-semibold">
            Abdullah
          </p>
        </a>

        {/* --- Your Corrected Navigation --- */}
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]
                         text-gray-300 hover:text-white transition-colors duration-300"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span
                className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 
                             duration-300 group-hover:scale-x-100"
              ></span>
            </a>
          ))}
        </div>

        {/* 3. PERSONALIZED COPYRIGHT */}
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} M T Abdullah.
        </p>
      </div>

      {/* 4. PERSONALIZED DEVELOPER CREDIT */}
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Designed & Developed with passion by {" "}
        <a
          href="https://github.com/mt-abdullah" // Links to your GitHub
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          M T Abdullah
        </a>
      </p>
    </div>
  );
};

export default Footer;
