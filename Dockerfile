# Use the official Node.js image with LTS version based on Alpine Linux
FROM node:lts-alpine

# Set environment variable for production
ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production --silent

# Copy the rest of the application code to the working directory
COPY . .

# Change ownership of the application files to the 'node' user
RUN chown -R node:node /usr/src/app

# Use a non-root user
USER node

# Expose the port your application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
