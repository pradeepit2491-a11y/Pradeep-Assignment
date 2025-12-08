
import { expect, test } from "@playwright/test";


 test("Test to launch a browser",async ({page})=>{  // page fixture

 {
    await page.goto(`http://leaftaps.com/opentaps/control/main`)//URL
    await page.locator(`[id="username"]`).fill(`demosalesmanager`);//Username credential
    await page.locator(`#password`).fill(`crmsfa`)//passwordcredential
    await page.locator('.decorativeSubmit').click()
    await page.waitForTimeout(3000);
    await page.locator(`[id="button"]`).click()//Click CRM/SFA
    await page.locator('//a[text()="Leads"] ').click()//Click leads
    await page.locator('//a[text()="Create Lead"]').click() // Create Lead
    await page.locator(`[id="createLeadForm_companyName"]`).fill(`Company A`)//complany name
    await page.locator(`[id="createLeadForm_firstName"]`).fill(`Company first name `)//First name
    await page.locator(`[id="createLeadForm_lastName"]`).fill(`Company last name `)//last name
    await page.locator(`[id="createLeadForm_personalTitle"]`).fill(`Greetings`)//salutation
    await page.locator('[name="generalProfTitle"]').fill(`Mr`)//title
   await page.locator('[name="annualRevenue"]').fill(`100000`)//revenue
     await page.locator(`[id="createLeadForm_departmentName"]`).fill(`IT`)//Department
     await page.locator(`[id="createLeadForm_primaryPhoneNumber"]`).fill(`999456756`)// mobile no
     await page.locator('[name="submitButton"]').click()//Click create Lead
    const verifyCompanyName= page.locator(`[id="viewLead_companyName_sp"]`)
    await expect (verifyCompanyName).toContainText(`Company A`)//
    console.log("Verified company name");
    const firstName= page.locator(`[id="viewLead_firstName_sp"]`)
    await expect (firstName).toContainText(`Company first name`)
    console.log("Verified first name");
    const lastName= page.locator(`[id="viewLead_lastName_sp"]`)
    await expect (lastName).toContainText(`Company last name`)
    console.log("Verified last name");
    const statusAssigned= page.locator(`[id="viewLead_statusId_sp"]`)
    await expect (statusAssigned).toContainText(`Assigned`)
    console.log("Verified status");
    const pageTitle= await page.title()
    console.log('Page title:', pageTitle); 


}
 }
)