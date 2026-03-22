import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const userName = "Aman";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#profile-menu")) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`w-full px-8 py-3 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-indigo-100"
          : "bg-white border-b border-indigo-100"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        {/* Icon mark */}
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M2 4a2 2 0 012-2h8a2 2 0 012 2v1H2V4zM1 7h14v5a2 2 0 01-2 2H3a2 2 0 01-2-2V7z" />
          </svg>
        </div>

        <span className="text-[1.15rem] font-bold tracking-tight text-indigo-900">
          Cine<span className="text-purple-600 font-black">Match</span>
        </span>

        {/* Pill badge */}
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-500 border border-indigo-100">
          Beta
        </span>
      </div>

      {/* Center nav links — optional, clean and minimal */}
      <nav className="hidden md:flex items-center gap-1">
        {["Discover", "Watchlist", "Trending"].map((item) => (
          <a
            key={item}
            href="#"
            className="px-3.5 py-1.5 text-sm font-medium text-slate-500 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-all duration-150"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Right: Profile */}
      <div className="relative" id="profile-menu">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-indigo-50 transition-all duration-150 group"
          aria-expanded={open}
        >
          {/* Avatar with ring */}
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              {userName.charAt(0)}
            </div>
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full border-2 border-white" />
          </div>

          <span className="hidden sm:block text-sm font-semibold text-slate-700 group-hover:text-indigo-700 transition-colors">
            {userName}
          </span>

          {/* Chevron */}
          <svg
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 4l4 4 4-4" />
          </svg>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-56 bg-white border border-indigo-100/80 rounded-2xl shadow-xl shadow-indigo-100/60 overflow-hidden z-50 animate-in">
            {/* Header section */}
            <div className="px-4 py-3.5 bg-gradient-to-br from-indigo-50 to-purple-50 border-b border-indigo-100">
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">
                Signed in as
              </p>
              <p className="font-bold text-indigo-800 text-sm">{userName}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                aman@example.com
              </p>
            </div>

            {/* Menu items */}
            <div className="p-1.5">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  ),
                  label: "My Profile",
                  sub: "View your account",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
                    />
                  ),
                  label: "Settings",
                  sub: "Preferences & privacy",
                },
              ].map(({ icon, label, sub }) => (
                <button
                  key={label}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-indigo-50 transition-all duration-150 group text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-indigo-800 leading-tight">
                      {label}
                    </p>
                    <p className="text-[11px] text-slate-400">{sub}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Sign out */}
            <div className="p-1.5 border-t border-indigo-50">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 transition-all duration-150 group text-left">
                <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 group-hover:text-red-600 leading-tight">
                    Sign Out
                  </p>
                  <p className="text-[11px] text-slate-400">See you soon</p>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .animate-in { animation: animate-in 0.15s ease-out forwards; }
      `}</style>
    </header>
  );
};

export default Header;
