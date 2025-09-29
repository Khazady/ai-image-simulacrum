# AI Image Simulacrum

## Overview

AI Image Simulacrum is an AI-generator inspired interface where users craft prompts, trigger mocked image generations, and browse the resulting gallery. The UI follows Atomic Design principles and uses scoped CSS Modules to deliver a polished, responsive experience across devices.

## Node and npm versions

Use the Node and npm versions defined in `package.json` under the `engines` field (`node@24.8.0`, `npm@11.6.0`). With `engine-strict=true` in `.npmrc`, other versions will cause `npm install` to fail.

A `.nvmrc` file is provided for convenience:

- Run `nvm use` in the project root (reads `.nvmrc`). If the version is missing, run `nvm install` first.

## Installation

1. Clone the repository: `git clone https://github.com/Khazady/ai-image-simulacrum.git`.
2. Change into the project directory.
3. Install dependencies: `npm install`.
4. Start the development server: `npm run dev`.
5. Build and preview for production: `npm run build`, then `npm run preview`.

## Technologies Used

React TypeScript CSS Modules React Context API Vite

## Project Architecture

Atomic Design – components are grouped into atoms, molecules, organisms, and templates for clarity.
React Context – centralizes generation state (history, loader, errors) for easy sharing across the interface.
Mocked API pipeline – a 2-second timeout simulates image generation and stores results in `localStorage`.
