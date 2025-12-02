# Paras Motor Werk Shop - Deployment Guide

## 🚀 Live Website
**Current Deployment URL:** https://uhmlmtnh.manus.space

## 📋 Custom Domain Setup (parasmoterwerk.com)

To connect your custom domain `parasmoterwerk.com` to the deployed website, follow these steps:

### Option 1: Using Vercel (Recommended)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Your Project**
   - Click "New Project"
   - Import from Git repository or upload the project files
   - Deploy the project

3. **Add Custom Domain**
   - Go to your project dashboard
   - Click "Settings" → "Domains"
   - Add `parasmoterwerk.com` and `www.parasmoterwerk.com`

4. **Configure DNS Records**
   - In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`

### Option 2: Using Netlify

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your preferred method

2. **Deploy Your Site**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your Git repository

3. **Add Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain: `parasmoterwerk.com`

4. **Configure DNS**
   - Add CNAME record: `www` → `your-site-name.netlify.app`
   - Add A record: `@` → `75.2.60.5`

### Option 3: Using GitHub Pages

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source branch (usually `main`)
   - Select folder (`/dist` or root)

3. **Configure Custom Domain**
   - Add `parasmoterwerk.com` in the custom domain field
   - Create a CNAME file in your repository with your domain

4. **DNS Configuration**
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## 🔧 Build and Deployment Commands

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Production Build
```bash
# Build the project
npm run build

# The built files will be in the 'dist' directory
# Upload the contents of 'dist' to your hosting provider
```

## 📁 Project Structure

```
paras-motor-werk-shop/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   └── images/        # Website images
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Inventory.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   └── main.jsx          # Entry point
├── dist/                 # Production build (generated)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🌐 DNS Configuration Details

### Required DNS Records for parasmoterwerk.com:

| Type  | Name | Value | TTL |
|-------|------|-------|-----|
| A     | @    | [Provider IP] | 300 |
| CNAME | www  | [Provider Domain] | 300 |

### Common Provider IPs:
- **Vercel:** `76.76.19.61`
- **Netlify:** `75.2.60.5`
- **GitHub Pages:** `185.199.108.153` (and 3 others)

## 🔒 SSL Certificate

Most modern hosting providers (Vercel, Netlify, GitHub Pages) automatically provide SSL certificates for custom domains. The certificate will be issued within 24 hours of DNS propagation.

## 📊 Performance Optimization

The website is already optimized with:
- ✅ Responsive design for all devices
- ✅ Optimized images and assets
- ✅ Modern React with Vite bundling
- ✅ Tailwind CSS for efficient styling
- ✅ Lazy loading and code splitting

## 🛠 Maintenance and Updates

### To update the website:
1. Make changes to the source code
2. Run `npm run build`
3. Upload the new `dist` folder contents
4. Or push changes to your Git repository (if using Git-based deployment)

### Regular maintenance:
- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor website performance and uptime

## 📞 Support

For technical support or questions about the website:
- Check the documentation in this repository
- Review the component files for customization
- Test changes locally before deploying

## 🎯 Features Included

- ✅ Professional automotive design
- ✅ Responsive mobile-first layout
- ✅ Interactive navigation
- ✅ Image gallery with lightbox
- ✅ Contact form with validation
- ✅ Service showcase
- ✅ Vehicle inventory display
- ✅ SEO-optimized structure
- ✅ Fast loading performance
- ✅ Modern React architecture

The website is now ready for production use and can be connected to your custom domain following the instructions above.

