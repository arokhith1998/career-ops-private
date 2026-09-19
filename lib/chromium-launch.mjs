// Wraps playwright's chromium.launch() to survive environments where the
// pinned playwright version's expected browser revision was never downloaded
// (e.g. sandboxes that pre-install one chromium build and block the CDN used
// by `playwright install`). Falls back to that pre-installed executable only
// when playwright's own resolved path does not exist on disk; otherwise
// behaves exactly like `chromium.launch()`.
import { chromium } from 'playwright';
import { existsSync } from 'fs';

const FALLBACK_EXECUTABLE = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || '/opt/pw-browsers/chromium';

function resolveExecutablePath() {
  try {
    const defaultPath = chromium.executablePath();
    if (existsSync(defaultPath)) return null;
  } catch {
    // fall through to fallback check below
  }
  return existsSync(FALLBACK_EXECUTABLE) ? FALLBACK_EXECUTABLE : null;
}

export function launchChromium(options = {}) {
  const executablePath = resolveExecutablePath();
  return chromium.launch(executablePath ? { ...options, executablePath } : options);
}
