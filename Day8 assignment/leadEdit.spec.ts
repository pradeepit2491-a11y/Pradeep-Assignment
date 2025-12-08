import { expect, test } from "@playwright/test";
test("Test to launch a browser",async ({page})=>{  // page fixture
 {
    await page.goto(`http://leaftaps.com/opentaps/control/main`)//URL
    await page.locator(`//input[@id=("username")]`).fill(`demosalesmanager`);//Username credential 
    await page.locator('//label[contains(text(),"Password")]').fill(`crmsfa`);//password
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//div[@class="crmsfa"]`).click();
    await page.locator(`//a[contains(text(),"Leads")]`).click(); 
    await page.locator(`//a[contains(text(),"Find Leads")]`).click(); 
    await page.locator(`//input[@id="ext-gen248"]`).fill(`cmpy `); 
    await page.locator(`//button[@id="ext-gen334"]`).click(); 
    await page.locator(`//a[text()="11696"]`).click(); 
    await page.locator(`//a[text()="Edit"]`).click(); 
    await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill(`cmpy name1 edited updated`);
    await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill(`800,000`);
    await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill(`Assist manager updated`);
    await page.locator(`//textarea[@id="updateLeadForm_description"]`).fill(`Updated description`);
    await page.locator(`(//input[@name="submitButton"])[1]`).click(); 
    }
}
 )