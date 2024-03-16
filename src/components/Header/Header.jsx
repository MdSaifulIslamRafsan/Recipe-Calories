const Header = () => {
  return (
    <header>
      {/* navbar start */}
      <nav className="my-5">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="text-xl lg:text-3xl whitespace-nowrap font-bold">Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-5">
            <div className="hidden lg:flex items-center bg-white shadow-2xl px-4 border-2 border-gray-200 rounded-full">
              <img src="https://i.ibb.co/Ycxtsk5/Frame-2.png" alt="" />
              <input
                type="text"
                placeholder="Search"
                className="input focus:outline-none focus:border-none rounded-full  md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className=" p-1 rounded-full bg-[#0BE58A]">
                  <img
                    className="flex justify-end"
                    src="https://i.ibb.co/NZWfd9T/Frame-1.png"
                    alt=""
                  />
                </div>
              </div>
              <ul
                tabIndex="0"
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar start */}
      {/* banner start  */}
      <section>
        <div
          className="hero lg:h-[450px] rounded-2xl"
          style={{
            background: "url(https://i.ibb.co/X3rhWR5/Rectangle-1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
          <div className="hero-content py-10 text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="mb-5 text-xl lg:text-5xl font-bold">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mb-5">
                offers a diverse collection of easy-to-follow recipes ranging
                from classic comfort foods to innovative culinary creations,
                catering to all tastes and skill levels.
              </p>
              <div className="flex flex-col gap-4 lg:flex-row justify-center">
                <button className="btn bg-[#0BE58A] rounded-full">
                  Explore Now
                </button>
                <button className="btn btn-outline text-white rounded-full hover:bg-[#0BE58A] hover:text-black">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </header>
  );
};

export default Header;
