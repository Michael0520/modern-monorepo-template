import { expect, test } from '@playwright/test';

test('has page title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Modern Monorepo/);
});

test('sidebar is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-slot="sidebar"]')).toBeVisible();
});

test('server status badge is displayed', async ({ page }) => {
  await page.goto('/');
  const badge = page.getByText(/Server Online|Server Offline|Checking/);
  await expect(badge).toBeVisible({ timeout: 10_000 });
});
