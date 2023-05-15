FROM node:20-alpine

# Set working directory
WORKDIR /app-fe

# Copy source code
COPY . /app-fe

# Install dependencies
RUN npm install

# Build Vite app
RUN npm run build

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "run", "serve"]
