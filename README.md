# Teo's Minecraft Birthday Invitation

A Minecraft-themed birthday invitation built with React, TypeScript, and Vite. Designed for static deployment on GitHub Pages.

## Features

- 🎮 Pixel-perfect Minecraft characters (Steve, Alex, Creeper, Wolf, Villager)
- 🐱 Animated Minecraft cats
- ✨ Animated sparkle effects
- 🎂 Responsive design
- 📱 Mobile-friendly
- 🔗 Google Forms integration for RSVP

## Local Development

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:5173/teo-birthday/
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

### Update Google Form URL

Edit `src/components/RsvpSection.tsx` and replace the placeholder URL:

```typescript
const GOOGLE_FORM_URL = 'https://forms.gle/YOUR_GOOGLE_FORM_ID';
```

Replace with your actual Google Form URL.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. Create a GitHub repository named `teo-birthday`
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Minecraft birthday invitation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/teo-birthday.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings → Pages**
4. Under "Build and deployment", select **Source: GitHub Actions**
5. The workflow will automatically run and deploy your site
6. Your invitation will be live at: `https://YOUR_USERNAME.github.io/teo-birthday/`

## Project Structure

```
teo-birthday/
├── src/
│   ├── components/
│   │   ├── Characters/
│   │   │   ├── Steve.tsx
│   │   │   ├── Alex.tsx
│   │   │   ├── Creeper.tsx
│   │   │   ├── Wolf.tsx
│   │   │   └── Villager.tsx
│   │   ├── Card.tsx          # Main card component
│   │   ├── Header.tsx        # Invitation header
│   │   ├── InfoBlock.tsx     # Reusable info display
│   │   ├── Cats.tsx          # Minecraft cats
│   │   ├── Sparkles.tsx      # Sparkle animation
│   │   ├── RsvpSection.tsx   # RSVP with Google Form link
│   │   └── DirtLayer.tsx     # Bottom dirt border
│   ├── styles/
│   │   └── card.css          # All card styling
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
└── vite.config.ts            # Vite configuration with base path
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **CSS** - Pixel-art styling with custom animations
- **Google Fonts** - Press Start 2P and VT323 fonts

## Customization

To change the invitation details, edit `src/components/Card.tsx`:

- **Date**: Line with `value="Saturday, March 28, 2026"`
- **Time**: Line with `value="1:30 PM"`
- **Location**: Lines with address details
- **Name**: Edit `src/components/Header.tsx` - change "TEO"
- **Age**: Edit "TURNS 5!" in Header component

## License

Personal project for Teo's 5th birthday party.
