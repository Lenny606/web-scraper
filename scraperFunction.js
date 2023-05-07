const puppeteer = require('puppeteer');

const urlWeb = "https://www.csfd.cz/";

async function scrapeFunction(url) {
    //starts the browser
    const browser = await puppeteer.launch()
    //creates blank page
    const page = await browser.newPage()
    //goes to url
    await page.goto(url);

    //selector for xpath, saved in array under variable first element
    const [element] = await page.$x('//*[@id="page-wrapper"]/div/div[1]/div[3]/div[1]/section/div/article[1]/figure/a/img')
    // extracts data
    const src = await element.getProperty('alt')
    const text = await src.jsonValue()

    console.log(text)

    browser.close();
}


//call 
scrapeFunction(urlWeb)