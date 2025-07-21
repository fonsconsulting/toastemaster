# Railway Deployment Guide for Hurstville Weekend Toastmasters Website

## 🚀 Problem Solved: Blank Page Issue

Your Railway deployment was showing a blank page because Railway doesn't automatically serve built static files like Vercel/Netlify does. The default `npm start` command runs a development server, which isn't suitable for production.

## ✅ Solution: Node.js Serve with nixpacks

I've implemented a reliable Railway solution using **Node.js serve** to properly serve your built Vite React application. This avoids Nix package conflicts that can occur with Caddy.

### Files Added:

#### 1. `nixpacks.toml`
```toml
[phases.setup]
nixPkgs = ['nodejs-18_x']

[phases.build]
cmds = ['npm ci --production=false', 'npm run build', 'npm install -g serve']

[start]
cmd = 'serve -s dist -l $PORT'
```
- Installs Node.js 18.x during setup
- Runs `npm ci` and `npm run build` to build your app
- Installs the `serve` package globally
- Starts serve to host the built files from `dist` directory

#### 2. `package.json` (updated)
Added `serve` dependency:
```json
"serve": "^14.2.1"
```

#### 3. `.railwayignore`
- Excludes unnecessary files from deployment
- Speeds up deployment process
- Reduces deployment size

## 🔧 Deployment Steps

### 1. Install Dependencies Locally (Optional)
```bash
npm install
```

### 2. Test Build Locally (Recommended)
```bash
npm run build
npx serve -s dist
```

### 3. Commit and Push Changes
```bash
git add .
git commit -m "Fix Railway deployment with Node.js serve"
git push origin main
```

### 4. Deploy to Railway
1. Go to [Railway.app](https://railway.app)
2. Create a new project or redeploy your existing one
3. Connect your GitHub repository
4. Railway will automatically detect the `nixpacks.toml` and use the new configuration

### 5. Environment Variables (if needed)
If your app uses environment variables:
- Go to your Railway project dashboard
- Add variables in the Variables section
- Common variables might include:
  - `VITE_BASE_PATH=/` (already handled in vite.config.ts)
  - Any API keys or endpoints your app needs

## ✅ What This Fixes

- **✅ Blank page issue**: `serve` properly hosts your built React app
- **✅ React Router support**: `serve -s` handles client-side routing automatically
- **✅ Performance**: Optimized static file serving
- **✅ Production-ready**: Uses built files, not development server
- **✅ Reliability**: Avoids Nix package conflicts
- **✅ SEO-friendly**: Proper HTML responses for all routes

## 🔍 Verification

After deployment:
1. Your Railway URL should show the Hurstville Weekend Toastmasters website
2. All navigation should work (Home, About, Meetings, Contact, Join)
3. Images should load properly (after you upload them to `public/images/`)
4. Forms should be functional

## 📚 References

- [Railway Help Station - Vite React Blank Screen Issue](https://station.railway.com/questions/issue-deploying-vite-react-type-script-24f79417)
- [Railway Example Repo](https://github.com/brody192/vite-react-template)
- [Serve Package Documentation](https://www.npmjs.com/package/serve)

## 🆘 Troubleshooting

If you still see issues:
1. Check Railway build logs for errors
2. Ensure all environment variables are set
3. Verify that `dist` folder is being created during build
4. Check that your `package.json` build script works locally: `npm run build`
5. Test serve locally: `npx serve -s dist`

## 📁 Don't Forget: Add Meeting Photos

Remember to upload your meeting photos to the `public/images/` directory:
- `IMG-20240818-WA0020.jpg`
- `IMG-20250202-WA0002.jpg`
- `IMG-20250706-WA0005.jpg`
- `IMG-20250706-WA0007.jpg`

Your Toastmasters website should now deploy successfully to Railway! 🎉 