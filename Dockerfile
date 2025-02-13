# Stage 1: Node builder for Vue frontend
FROM node:18-alpine as frontend-builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend-specific files
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY app/frontend ./app/frontend

# Build the frontend
RUN npm run build

# Stage 2: Ruby application
FROM ruby:3.3.7-slim

# Install essential Linux packages
RUN apt-get update -qq && \
    apt-get install -y \
    build-essential \
    libpq-dev \
    postgresql-client \
    nodejs \
    git \
    curl \
    libyaml-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Install Rails dependencies
COPY Gemfile Gemfile.lock ./
RUN bundle install --jobs 4

# Copy the rest of the application
COPY . .

# Copy the built frontend from the frontend-builder stage
COPY --from=frontend-builder /app/dist ./public/vite

# Add a script to be executed every time the container starts
COPY bin/docker-entrypoint /usr/bin/
RUN chmod +x /usr/bin/docker-entrypoint

EXPOSE 3000

ENTRYPOINT ["docker-entrypoint"]

# Start the main process
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]