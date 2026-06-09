import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-100 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-orange-500">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 max-w-md text-gray-500">
          Looks like the page you're looking for has melted away like ice cream
          on a sunny day.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="rounded-full bg-orange-100 p-6">
            <Search size={60} className="text-orange-500" />
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Error Code: 404 | Resource Not Found
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
