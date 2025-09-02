# Portfolio Deployment Guide

This guide provides instructions for deploying the portfolio application to various platforms.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Environment Configuration

### Development
For local development, create a `.env.local` file:
```bash
cp env.example .env.local
```

### Production
For production deployment, ensure the following environment variable is set:
```bash
VITE_API_BASE_URL=https://portfolio-be-twdt.onrender.com/api/
```

## Build Commands

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build:prod
```

### Clean Build (for deployment)
```bash
npm run deploy:build
```

### Preview Production Build
```bash
npm run preview:prod
```

## Deployment Options

### 1. Static Hosting (Recommended)

#### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build:prod`
3. Set output directory: `dist`
4. Set environment variable: `VITE_API_BASE_URL=https://portfolio-be-twdt.onrender.com/api/`
5. Deploy

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:prod`
3. Set publish directory: `dist`
4. Add environment variable: `VITE_API_BASE_URL=https://portfolio-be-twdt.onrender.com/api/`
5. Deploy

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Build and deploy: `npm run deploy:build && npm run deploy`

### 2. Traditional Web Hosting

1. Run production build: `npm run build:prod`
2. Upload the `dist` folder contents to your web server
3. Ensure your server serves `index.html` for all routes (SPA routing)

### 3. Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:prod

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

## Build Optimization

The production build includes:
- Code splitting with manual chunks for better caching
- Minification using esbuild
- Asset optimization
- No source maps for smaller bundle size

### Bundle Analysis
To analyze bundle size:
```bash
npm install --save-dev vite-bundle-analyzer
npx vite-bundle-analyzer dist
```

## Environment Variables

| Variable | Development | Production |
|----------|-------------|------------|
| `VITE_API_BASE_URL` | `http://127.0.0.1:8000/api/` | `https://portfolio-be-twdt.onrender.com/api/` |

## Troubleshooting

### Build Issues
- Ensure all TypeScript errors are resolved: `npm run type-check`
- Check for linting errors: `npm run lint`
- Verify all dependencies are installed: `npm ci`

### Runtime Issues
- Check browser console for errors
- Verify API endpoints are accessible
- Ensure environment variables are set correctly

### Performance
- Monitor bundle size with bundle analyzer
- Check Core Web Vitals in production
- Optimize images if needed

## Security Considerations

- Environment variables prefixed with `VITE_` are exposed to the client
- Never include sensitive data in environment variables
- Use HTTPS in production
- Implement proper CORS policies on the backend

## Monitoring

Consider adding:
- Error tracking (Sentry)
- Analytics (Google Analytics)
- Performance monitoring
- Uptime monitoring

## Maintenance

- Regularly update dependencies
- Monitor for security vulnerabilities
- Keep build tools updated
- Test deployment process regularly
