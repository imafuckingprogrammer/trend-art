# Agile - Modern Marketing Website

A beautiful, responsive React website built with Tailwind CSS and Framer Motion animations. This project showcases modern web design principles with smooth animations, clean typography, and excellent user experience.

## 🚀 Features

- **Modern Design**: Clean, minimal aesthetic with large typography inspired by contemporary design trends
- **Responsive Layout**: Fully responsive design that works perfectly on all devices
- **Smooth Animations**: Beautiful scroll-triggered animations using Framer Motion
- **SEO Optimized**: Built with React Helmet for proper meta tags and SEO optimization
- **Five Complete Pages**: Home, About, Work, Services, and Contact
- **Interactive Elements**: Hover effects, scroll animations, and smooth page transitions
- **Custom Design System**: Comprehensive color palette and typography system
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Filterable project gallery
- **Performance Optimized**: Fast loading times and optimized images

## 🎨 Design Features

- **Color Palette**: 
  - Primary: Deep blue tones (#1d4ed8 to #172554)
  - Accent: Warm red/orange (#ef4444)
  - Neutrals: Complete grayscale palette
- **Typography**: Inter font with custom display sizes
- **Animations**: Scroll-triggered text reveals, smooth page transitions, hover effects
- **Layout**: Modern grid systems with proper spacing and visual hierarchy

## 🛠️ Tech Stack

- **React 19**: Latest React with modern hooks and features
- **Tailwind CSS 4**: Latest utility-first CSS framework
- **Framer Motion**: Professional animation library
- **React Router**: Client-side routing
- **React Helmet Async**: SEO and meta tag management
- **Picsum Photos**: Placeholder images for development

## 📦 Installation

1. **Clone the repository** (if this was a git repo):
   ```bash
   git clone <repository-url>
   cd marketing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Site footer
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Work.js         # Portfolio page
│   ├── Services.js     # Services page
│   └── Contact.js      # Contact page
├── hooks/              # Custom React hooks
│   └── useTextReveal.js # Scroll animation hook
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🎯 Pages Overview

### Home
- Hero section with animated typography
- Services overview with icons
- Featured work preview
- Call-to-action section

### About
- Company values with alternating layout
- Team member profiles
- Statistics section
- Animated elements throughout

### Work
- Filterable project portfolio
- Project cards with hover effects
- Process overview
- Detailed project information

### Services
- Service offerings with detailed features
- Pricing plans comparison
- Process timeline
- FAQ section

### Contact
- Contact form with validation
- Company information
- Multiple office locations
- Social media links

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  accent: { /* Your accent colors */ },
  neutral: { /* Your neutral colors */ }
}
```

### Typography
Modify font settings in `tailwind.config.js`:
```javascript
fontFamily: {
  'display': ['Your-Font', 'system-ui', 'sans-serif'],
  'body': ['Your-Font', 'system-ui', 'sans-serif'],
}
```

### Content
Update content in each page component to match your brand and requirements.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## ⚡ Performance

- Optimized images using Picsum (replace with optimized real images)
- Lazy loading for off-screen content
- Efficient animations with Framer Motion
- Minimal bundle size with tree shaking

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support

For questions or support, please contact hello@agile.com

## 📄 License

This project is created for demonstration purposes. Please ensure you have proper licenses for any assets used in production.

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
