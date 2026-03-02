import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = 'C:\\Users\\Mayur Tayade\\.gemini\\antigravity\\brain\\491e72bf-1ec0-431a-829c-f5685b5e4931\\uploaded_media_1772350613283.png';
const destPath = path.join(__dirname, '..', 'public', 'profile-photo.png');

try {
    const publicDir = path.dirname(destPath);
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.copyFileSync(srcPath, destPath);
    console.log('Successfully copied profile photo to public directory.');
} catch (error) {
    console.error('Failed to copy file:', error);
}
