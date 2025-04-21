# InvestNest - Social Investment Platform

InvestNest is a React-based social platform for investors to share opinions, ask questions, and engage in discussions about investments. The application allows users to create posts, comment on others' posts, upvote content, and thread discussions together.

## Features

- **Post Creation**: Users can create investment-related posts with titles, descriptions, and media content (images, videos, YouTube embeds)
- **Post Types**: Support for both opinion pieces and questions
- **Commenting System**: Real-time comment functionality on all posts
- **Upvoting**: Users can upvote valuable content
- **Threading**: Posts can be linked together to create threaded discussions
- **Content Filtering**: Filter posts by recency, popularity, or type
- **Search Functionality**: Search for specific content across all posts
- **Theme Options**: Choose between default, bearish (red), and bullish (green) themes
- **Post Management**: Edit or delete your own posts (password protected)

## Technology Stack

- **Frontend**: React 19 with React Router DOM 7
- **Build Tool**: Vite 6
- **Database**: Supabase (PostgreSQL)
- **Styling**: CSS with responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd InvestNest
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. The application will be available at `http://localhost:5173/`

## Project Structure

- `src/`
  - `/components` - Reusable UI components (PostCard, Thread)
  - `/pages` - Main application pages (Home, Create, Post, Update)
  - `App.jsx` - Main application component with routing
  - `client.js` - Supabase client configuration

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Features in Detail

### Anonymous Identity
- Each user gets a unique UUID to identify their posts and comments
- No login required, but user actions are still tracked

### Post Management
- Create posts with title, body, media (images/videos), and type
- Edit your own posts
- Delete posts with password protection
- Thread posts to create connected discussions

### Theme Options
- Default (dark theme)
- Bearish (red theme for bearish market sentiment)
- Bullish (green theme for bullish market sentiment)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
