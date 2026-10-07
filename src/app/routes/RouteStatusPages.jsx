import { Link } from 'react-router-dom';

export const UnauthorizedPage = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
    <h1 className="text-3xl font-bold">Access denied</h1>
    <p>You do not have permission to view this page.</p>
    <Link className="underline" to="/home">
      Return to dashboard
    </Link>
  </main>
);

export const NotFoundPage = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
    <h1 className="text-3xl font-bold">Page not found</h1>
    <p>The page you requested does not exist.</p>
    <Link className="underline" to="/">
      Return to sign in
    </Link>
  </main>
);
