# Team Sync API

This Express API implements the frontend's authentication routes and the admin-only
`/api/employee` listing, create, update, and delete routes.

## Local setup

1. Create a private `backend/.env` from `.env.example`.
2. Set `MONGODB_URI`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, and `FRONTEND_URL`.
   Generate each JWT secret with `node -e "console.log(require('node:crypto').randomBytes(48).toString('hex'))"`.
3. From this directory, run `npm install`, then `npm run dev`.
4. Check `http://localhost:4000/api/health`.

The Atlas connection string and JWT secrets must stay in environment variables. Do not
commit `.env` or expose these values in the frontend.

## Render deployment

Create a Render Web Service for this repository with **Root Directory** `backend`,
**Build Command** `npm install`, and **Start Command** `npm start`. Add the same
environment variables in Render's Environment settings. Set `FRONTEND_URL` to
`https://team-sync-platform.vercel.app` and `NODE_ENV` to `production`.

After deployment, set `VITE_API_BASE_URL` in Vercel to the Render service URL plus
`/api`, then redeploy the frontend.

New public registrations are always employees. Do not add a client-controlled role
field to registration; provision an administrator manually through a trusted database
operation when one is needed.
