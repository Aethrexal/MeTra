# Media Tracking App

A self-hostable media tracking application built with Nuxt 3, Supabase, and TVDB API integration.

## Features

- Search and track TV shows and movies
- User authentication and personalized watchlists
- Integration with TVDB API for up-to-date media information
- Responsive design for both mobile and desktop use
- Docker support for easy deployment

## Prerequisites

- Node.js (v14 or later)
- Docker and Docker Compose
- Supabase account
- TVDB API key

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/media-tracking-app.git
cd media-tracking-app
```

2. Install dependencies:
```bash
npm install
```
3. Set up environment variables:
Rename .env.example to .env and set the variables.

4. Set up Supabase:
- Create a new project in Supabase
- Run the provided SQL scripts to set up the necessary tables and functions

## Running the Application

### Development

```bash
npm run dev
```

### Production

Using Docker:
```bash
docker-compose up -d
```

## Usage
1. Register a new account or log in
2. Search for TV shows or movies
3. Add items to your watchlist
4. Update watch status and ratings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Aethrexal/MeTra/blob/main/LICENSE) file for details.
