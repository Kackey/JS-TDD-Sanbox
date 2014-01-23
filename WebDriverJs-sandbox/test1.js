/**
 * Created by hidekazu.kakinuma on 14/01/21.
 */

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('http://creator.mynavi-agent.jp/');

driver.quit();