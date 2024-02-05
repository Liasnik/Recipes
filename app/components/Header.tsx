import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-slate-900 py-4 sticky top-0 w-full">
      <div className="mx-auto px-20">
        <nav className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">{/* Logo */}</div>
          <ul className="flex space-x-7">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Recipes
              </Link>
            </li>
            <li>
              <Link
                href="/quotes"
                className="hover:text-blue-300 active:scroll-pb-1"
              >
                Quotes
              </Link>
            </li>
            <li>
              <Link href="/carts" className="hover:text-blue-300">
                Carts
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-blue-300">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
