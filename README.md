# Sean Coleman - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on all devices
- **Dark Mode**: Built-in dark mode support
- **Fast**: Built with Vite for optimal performance
- **SEO Friendly**: Proper meta tags and structure

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (JSX)** - Modern JavaScript syntax

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Push your code to GitHub** (if you haven't already)
2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
3. **The deployment will happen automatically** when you push to the main branch

### Manual Deployment:

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The built files will be in the 'dist' folder
# You can then upload these to GitHub Pages manually
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg          # Custom SC favicon
├── src/
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment workflow
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Customization

### Colors

The portfolio uses a blue-to-purple gradient theme. You can customize colors in:

- `tailwind.config.js` for Tailwind classes
- `src/App.jsx` for component-specific styles

### Content

Update your information in `src/App.jsx`:

- Personal details in the Hero section
- Skills in the About section
- Projects in the Projects section
- Contact information in the Contact section

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by Sean Coleman
