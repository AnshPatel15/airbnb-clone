#!/bin/bash

# Install the Prisma CLI
npm install prisma --save-dev

# Generate the Prisma Client
npx prisma generate

# Build the Next.js application
npm run build