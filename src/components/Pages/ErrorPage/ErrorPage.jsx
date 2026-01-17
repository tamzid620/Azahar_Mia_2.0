
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1f36] via-[#2e3a59] to-[#0f172a] text-white font-montserrat">
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-light_yellow animate-pulse drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      </div>

      {/* Headline */}
      <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-[#0ea5e9]">
        Oops! Something went wrong
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 text-lg max-w-md text-center mb-8">
        The page you’re looking for doesn’t exist or is temporarily unavailable.
        Let’s get you back on track.
      </p>

      {/* Action buttons */}
      <div className="flex gap-4">
        <Link
          to="/"
         className="px-6 py-3 mt-2 bg-gradient-to-b from-[#64748b] to-transparent text-white font-semibold rounded-lg shadow-lg hover:from-transparent hover:to-[#64748b] transition duration-300"
        >
          Go Home
        </Link>
        {/* <Link
          to="/contactus"
         className="px-6 py-3 mt-2 bg-transparent border border-[#64748b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#64748b30] transition duration-300"
        >
          Contact Support
        </Link> */}
      </div>

      {/* Footer note */}
      <p className="mt-12 text-sm text-gray-200">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </p>
    </div>
  );
};

export default ErrorPage;
