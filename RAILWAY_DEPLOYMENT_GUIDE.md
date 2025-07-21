# Railway Deployment Guide for Hurstville Weekend Toastmasters Website

## 🚀 Problem Solved: Blank Page Issue

Your Railway deployment was showing a blank page because Railway doesn't automatically serve built static files like Vercel/Netlify does. The default `npm start` command runs a development server, which isn't suitable for production.

## ✅ Solution: Caddy Web Server with nixpacks

I've implemented the recommended Railway solution using **Caddy** as a web server to properly serve your built Vite React application.

### Files Added:

#### 1. `Caddyfile`
```
:{$PORT}

root * dist
encode gzip
file_server
try_files {path} /index.html
```
- Serves files from the `dist` directory (your built app)
- Enables gzip compression for better performance
- Handles React Router by falling back to `index.html`
- Uses Railway's `$PORT` environment variable

#### 2. `nixpacks.toml`
```toml
[phases.setup]
nixPkgs = ['nodejs', 'caddy']

[phases.build]
cmds = ['npm ci', 'npm run build']

[start]
cmd = 'caddy run --config Caddyfile --adapter caddyfile 2>&1'
```
- Installs Node.js and Caddy during setup
- Runs `npm ci` and `npm run build` to build your app
- Starts Caddy web server to serve the built files

#### 3. `.railwayignore`
- Excludes unnecessary files from deployment
- Speeds up deployment process
- Reduces deployment size

## 🔧 Deployment Steps

### 1. Commit and Push Changes
```bash
git add .
git commit -m "Add Railway deployment configuration with Caddy"
git push origin main
```

### 2. Deploy to Railway
1. Go to [Railway.app](https://railway.app)
2. Create a new project or redeploy your existing one
3. Connect your GitHub repository
4. Railway will automatically detect the `nixpacks.toml` and use the new configuration

### 3. Environment Variables (if needed)
If your app uses environment variables:
- Go to your Railway project dashboard
- Add variables in the Variables section
- Common variables might include:
  - `VITE_BASE_PATH=/` (already handled in vite.config.ts)
  - Any API keys or endpoints your app needs

## ✅ What This Fixes

- **✅ Blank page issue**: Caddy properly serves your built React app
- **✅ React Router support**: `try_files` directive handles client-side routing
- **✅ Performance**: Gzip compression enabled
- **✅ Production-ready**: Uses built files, not development server
- **✅ SEO-friendly**: Proper HTML responses for all routes

## 🔍 Verification

After deployment:
1. Your Railway URL should show the Hurstville Weekend Toastmasters website
2. All navigation should work (Home, About, Meetings, Contact, Join)
3. Images should load properly
4. Forms should be functional

## 📚 References

- [Railway Help Station - Vite React Blank Screen Issue](https://station.railway.com/questions/issue-deploying-vite-react-type-script-24f79417)
- [Railway Example Repo](https://github.com/brody192/vite-react-template)
- [Caddy Web Server Documentation](https://caddyserver.com/)

## 🆘 Troubleshooting

If you still see issues:
1. Check Railway build logs for errors
2. Ensure all environment variables are set
3. Verify that `dist` folder is being created during build
4. Check that your `package.json` build script works locally: `npm run build`

Your Toastmasters website should now deploy successfully to Railway! 🎉 