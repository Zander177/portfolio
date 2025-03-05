import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#a5a5a5] sm:text-md rounded md:p-0 hover:text-white  font-semibold transition-all duration-500"
    
    >
      {title}
    </Link>
  );
};

export default NavLink;



