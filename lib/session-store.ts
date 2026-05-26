/**
 * Server-side session store for admin auth.
 * Module-level Map survives hot reloads in dev; resets on cold start (acceptable for internal tooling).
 * Token → expiry timestamp (ms).
 */

const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

const sessions = new Map<string, number>();

export function createSession(token: string): void {
  sessions.set(token, Date.now() + SESSION_TTL_MS);
}

export function validateSession(token: string | undefined): boolean {
  if (!token || !/^[0-9a-f]{64}$/.test(token)) return false;
  const expiry = sessions.get(token);
  if (!expiry) return false;
  if (Date.now() > expiry) {
    sessions.delete(token);
    return false;
  }
  return true;
}

export function revokeSession(token: string | undefined): void {
  if (token) sessions.delete(token);
}
