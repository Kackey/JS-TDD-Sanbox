/**
 * Created by hidekazu.kakinuma on 14/01/21.
 */

var webdriver = require('selenium-webdriver');

var chrome_driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

var firefox_driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();

var ie_driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.ie()).
    build();

var drivers = [chrome_driver, firefox_driver, ie_driver];

jasmine.getEnv().defaultTimeoutInterval = 10000;

drivers.forEach(function (value, index, ar){
    describe('basic test', function () {
        it('should be on correct page', function (done) {
            value.get('http://www.wingify.com');
            value.getTitle().then(function(title) {
                expect(title).toBe('Wingify - Website Conversion Rate Optimization, Conversion Optimization, Landing Page Optimization, Website Conversion Rate, Conversion Increase, Improve Conversion');
                // Jasmine waits for the done callback to be called before proceeding to next specification.
                done();
            });
            value.quit();
        });
    });
});