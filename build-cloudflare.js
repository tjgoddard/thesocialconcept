// Build script for Cloudflare Pages
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building client...');

// Build the client
exec('npx vite build', (error, stdout, stderr) => {
  if (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
  
  console.log(stdout);
  
  // Move files from dist/public to dist root
  const publicDir = 'dist/public';
  const outputDir = 'dist';
  
  if (fs.existsSync(publicDir)) {
    // Copy all files from dist/public to dist
    const files = fs.readdirSync(publicDir);
    files.forEach(file => {
      const srcPath = path.join(publicDir, file);
      const destPath = path.join(outputDir, file);
      if (fs.existsSync(destPath)) {
        fs.rmSync(destPath, { recursive: true, force: true });
      }
      fs.cpSync(srcPath, destPath, { recursive: true });
    });
    
    // Remove the public directory
    fs.rmSync(publicDir, { recursive: true, force: true });
    console.log('Moved client files from dist/public to dist');
  }
  
  // Copy functions after successful build
  const functionsDir = 'functions';

  if (fs.existsSync(functionsDir)) {
    const targetDir = path.join(outputDir, '_functions');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.cpSync(functionsDir, targetDir, { recursive: true });
    console.log('Functions copied to dist/_functions');
  }

  // Copy shared directory
  const sharedDir = 'shared';
  if (fs.existsSync(sharedDir)) {
    const targetSharedDir = path.join(outputDir, '_functions', 'shared');
    fs.cpSync(sharedDir, targetSharedDir, { recursive: true });
    console.log('Shared files copied');
  }
  
  console.log('Build complete!');
});