// gta6-clipper-blaine entry: hand the gate the video's address.
//
// The entry is the YouTube video, not this program: the house reads VIDEO.json from /output and then reads the video
// itself through the YouTube Data API. So the program's whole job is to put a usable VIDEO.json there, and to fail
// loudly (exit 1) when the repository's VIDEO.json is not a video address at all, so a broken entry never looks green.
//
// Locally: MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const videoUrlPattern = /^https:\/\/(?:www\.|m\.)?youtube\.com\/(?:shorts\/|watch\?v=)|^https:\/\/youtu\.be\//;

function readVideo(): { url: string } {
  const raw = readFileSync(join(botDir, 'VIDEO.json'), 'utf8');
  const parsed = JSON.parse(raw) as { url?: unknown };
  if (typeof parsed.url !== 'string' || !videoUrlPattern.test(parsed.url)) {
    throw new Error(`VIDEO.json holds no YouTube video address: ${raw.trim().slice(0, 200)}`);
  }
  return { url: parsed.url };
}

try {
  const video = readVideo();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'VIDEO.json'), `${JSON.stringify(video)}\n`);
  console.log(`wrote ${join(outDir, 'VIDEO.json')} for ${video.url}`);
} catch (err) {
  console.error(`gta6-clipper entry failed: ${(err as Error).message}`);
  process.exit(1);
}
