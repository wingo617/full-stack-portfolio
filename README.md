# Full Stack Developer Portfolio

A modern, animated portfolio website built with React and Vite. Features smooth animations, responsive design, and a bold aesthetic perfect for showcasing your development work.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Looks great on all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Animated section transitions
- **Interactive Elements**: Hover effects, cursor glow, and dynamic navigation
- **Performance Optimized**: Fast loading with Vite
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- React 18
- Vite
- Lucide React (for icons)
- CSS-in-JS (styled within component)
- Google Fonts (Syne & Space Mono)

## 📦 Installation

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information

Edit `src/Portfolio.jsx` to customize:

1. **Hero Section** (lines ~200-220):
   - Update your title and description
   - Modify the greeting text

2. **About Section** (lines ~330-350):
   - Write your personal story
   - Add your background and interests

3. **Skills Section** (lines ~70-95):
   - Update the `skills` array with your tech stack
   - Add or remove skill categories

4. **Projects Section** (lines ~40-68):
   - Update the `projects` array with your work
   - Add project titles, descriptions, tech stack, and links
   - Replace `#` with actual project URLs

5. **Contact Section** (lines ~400-420):
   - Update email address (replace `your.email@example.com`)
   - Update social media links (GitHub, LinkedIn, etc.)

### Styling & Colors

The color scheme is defined in CSS variables (lines ~15-24 in the style block):

```css
--primary: #00ff88;    /* Main accent color (green) */
--secondary: #0066ff;  /* Secondary accent (blue) */
--dark: #0a0e27;       /* Background dark */
--darker: #050814;     /* Background darker */
--accent: #ff006e;     /* Accent pink */
```

Change these values to match your brand colors.

### Fonts

The portfolio uses:
- **Syne**: For headings (bold, modern)
- **Space Mono**: For body text (monospace, tech-focused)

To change fonts, update the Google Fonts import (line ~10 in style block) and the font-family declarations.

## 📱 Sections

1. **Home/Hero**: Eye-catching introduction with CTA buttons
2. **About**: Personal background and story
3. **Skills**: Tech stack organized by category (Frontend, Backend, Database, DevOps)
4. **Work**: Featured projects with descriptions and tech tags
5. **Contact**: Get in touch section with social links

## 🚢 Deployment on Vercel

### Method 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts** and your site will be live!

### Method 2: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure the project:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Click "Deploy"**

Your portfolio will be live in minutes at `https://your-project-name.vercel.app`!

### Environment Variables (if needed)

If you add any API keys or environment variables later:
1. Create a `.env` file locally
2. Add variables to Vercel dashboard under "Settings" > "Environment Variables"

## 📝 Build for Production

To create a production build locally:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 🎯 Performance Tips

- **Images**: Replace the placeholder avatar image with an optimized image (WebP format recommended)
- **Lazy Loading**: For more projects, consider implementing lazy loading
- **Analytics**: Add Google Analytics or Vercel Analytics for insights
- **SEO**: Update meta tags in `index.html` with your specific information

## 📄 File Structure

```
portfolio-site/
├── src/
│   ├── Portfolio.jsx    # Main component with all sections
│   └── main.jsx         # React entry point
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🐛 Troubleshooting

**Issue: Port already in use**
- Solution: Kill the process on port 5173 or use a different port: `npm run dev -- --port 3000`

**Issue: Icons not showing**
- Solution: Make sure lucide-react is installed: `npm install lucide-react`

**Issue: Fonts not loading**
- Solution: Check your internet connection (Google Fonts requires internet)

## 📞 Support

For questions or issues:
- Check the Vite documentation: https://vitejs.dev/
- Check React documentation: https://react.dev/

## 📜 License

This project is open source and available for personal and commercial use.

---

**Ready to deploy?** Just customize the content, push to GitHub, and deploy on Vercel! 🚀

Good luck with your portfolio! 🎉
