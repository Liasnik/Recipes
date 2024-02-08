import NavLinks from "./Nav-Links";

const Header = () => {
  return (
    <div className="bg-slate-900 py-4 sticky top-0 w-full">
      <div className="mx-auto px-20">
        <section className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">{/* Logo */}</div>
          <nav className="flex space-x-4 md:space-x-7">
            <NavLinks />
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Header;
