import { Link } from "react-router-dom";

function NoPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v2m0 6h.01m0 6h-.01M12 4c3.93 0 7 3.134 7 7s-3.07 7-7 7-7-3.134-7-7 3.07-7 7-7z"
                />
            </svg>

            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Oops! Page not found.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
                The page you are looking for might have been removed or doesn't exist.
            </p>
            <Link
                to="/users"
                className="inline-flex items-center px-4 py-2 mt-8 font-bold text-white bg-cyan-600 rounded hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300"
            >
                Go Home
            </Link>
        </div>
    );
}

export default NoPage;
