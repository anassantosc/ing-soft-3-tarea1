
const {Builder,By} = require('selenium-webdriver');


const test = async () => {
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('localhost:3000');

    // get div with id 
    let div = await driver.findElement(By.id('div-name'));
    console.log({div});
    // check if text is correct
    const correctText = "Jose";
    const text = await div.getText();

    if (text === correctText) {
        console.log("Test passed");
    }
    else {
        console.log("Test failed");
    }

    await driver.quit();
}

test();