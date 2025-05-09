import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://ecommerce-admin.azureedge.net/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('ecommerceadmin@yopmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('Test@123');
  await page.getByTestId('submit').click();
});