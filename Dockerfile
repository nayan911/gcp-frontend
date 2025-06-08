FROM node:18-alpine

WORKDIR /app

# Copy the Next.js app
COPY my-app/ ./

# Install dependencies
RUN npm install

# Set environment variables directly with hardcoded values
ENV NEXT_PUBLIC_APP_URL=https://gcp-backend11-81379993159.us-central1.run.app

# Build the Next.js application
RUN npm run build

EXPOSE 3001

# Start the Next.js application
CMD ["npm", "start", "--", "-p", "3001"]
