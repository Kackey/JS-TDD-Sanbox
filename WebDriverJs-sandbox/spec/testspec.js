/**
 * Created by hidekazu.kakinuma on 14/01/21.
 */

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

describe('basic test', function () {
    it('should be on correct page', function (done) {
        driver.get('http://www.wingify.com');
        driver.getTitle().then(function(title) {
            expect(title).toBe('Wingify - Website Conversion Rate Optimization, Conversion Optimization, Landing Page Optimization, Website Conversion Rate, Conversion Increase, Improve Conversion');
            // Jasmine waits for the done callback to be called before proceeding to next specification.
            done();
        });
    });
});