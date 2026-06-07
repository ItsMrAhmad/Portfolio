# Muhammad Ahmad Portfolio

A modern MERN-style portfolio for Muhammad Ahmad, built with React, Vite, Node.js, Express, and Mongoose.

## Run Locally

```bash
npm install
npm run dev
```

The React client runs at `http://localhost:5173` and proxies `/api` requests to the Express server at `http://localhost:5000`.

## Environment

Create `server/.env` from `server/.env.example` if you want contact messages stored in MongoDB.

```bash
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/muhammad-ahmad-portfolio
CLIENT_ORIGIN=http://localhost:5173,http://127.0.0.1:5173
```

Without `MONGODB_URI`, the contact endpoint still works in preview mode and logs submissions to the server console.

