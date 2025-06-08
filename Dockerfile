FROM node:18-alpine

WORKDIR /app

# Copy the Next.js app
COPY my-app/ ./

# Install dependencies
RUN npm install

# Set environment variables directly with hardcoded values
ENV NEXT_PUBLIC_APP_URL=https://gcp-backend11-81379993159.us-central1.run.app
# Cloud Run automatically provides PORT environment variable
ENV PORT=8080

# Build the Next.js application
RUN npm run build

# Expose the port that Cloud Run will use
EXPOSE 8080

# Start the Next.js application on the port defined by the PORT environment variable
CMD ["sh", "-c", "npm start -- -p ${PORT}"]
