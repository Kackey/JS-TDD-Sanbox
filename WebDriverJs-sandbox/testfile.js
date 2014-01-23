/**
 * Created by hidekazu.kakinuma on 14/01/21.
 */

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

describe('basic test', function () {
    it("says hello", function(){
        expect(helloWorld()).toEqual("Hello World!");
    });
/*
    it('should be on correct page', function (done) {
        driver.get('http://www.wingify.com');
        driver.getTitle().then(function(title) {
            expect(title).toBe('Wingify');
            // Jasmine waits for the done callback to be called before proceeding to next specification.
            done();
        });
    });
*/
});