const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="imgBlkFront"]');
    const src = await el.getProperty('src');
    const imageURL = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const text = await el2.getProperty('textContent');
    const title = await text.jsonValue();

    const [el3] = await page.$x('//*[@id="price"]'); 
    const text2 = await el3.getProperty('textContent');
    const price = await text2.jsonValue();
    
    console.log({imageURL, title, price});
    browser.close();
}
scrapeProduct('https://www.amazon.com/gp/product/1328959724');