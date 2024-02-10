# Use the official Node.js 18 image as the base image
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install the dependencies using Yarn
RUN yarn install

# Copy the source code to the working directory
COPY . .

# Build the NestJS app
RUN yarn build

# Expose the port on which the NestJS app will run
EXPOSE 3000

# Start the NestJS app
CMD ["yarn", "start:prod"]

