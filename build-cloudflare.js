// Simple build script for Cloudflare Pages
import fs from 'fs';
import path from 'path';

// Copy functions after build
const functionsDir = 'functions';
const outputDir = 'dist';

if (fs.existsSync(functionsDir)) {
  // Create _functions directory in output
  const targetDir = path.join(outputDir, '_functions');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Copy all function files
  fs.cpSync(functionsDir, targetDir, { recursive: true });
  console.log('Functions copied to dist/_functions');
}

// Copy shared directory for imports
const sharedDir = 'shared';
if (fs.existsSync(sharedDir)) {
  const targetSharedDir = path.join(outputDir, '_functions', 'shared');
  fs.cpSync(sharedDir, targetSharedDir, { recursive: true });
  console.log('Shared files copied');
}