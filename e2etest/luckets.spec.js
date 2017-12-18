/**
 * Created by pabloelustondo on 2017-12-17.
 */

var sleepTime = 2000;
var sleepTimeLast = 5000;

describe('Luckets Live', function() {
    it('should have a title', function() {

        var width = 400;
        var height = 800;
        browser.driver.manage().window().setSize(width, height);

        browser.get('http://localhost:8100/');
        browser.getTitle().then( function(r) {
            let title = r;
        });

        expect(browser.getTitle()).toEqual('Luckets');
    });

    it('welcome page has at least 3 navigation buttons ', function() {
        element.all(by.css(".swiper-pagination-bullet")).then( function(buttons){
            let b = buttons;
            expect(buttons.length).toBeGreaterThan(3);
        });
    });

    it('user can click and mode to tutorial page 2', function() {
        element.all(by.css(".swiper-pagination-bullet")).get(2).click();
        browser.sleep(sleepTime);
    });

    it('user can click and mode to tutorial page 3', function() {
        element.all(by.css(".swiper-pagination-bullet")).get(3).click();
        browser.sleep(sleepTime);
    });

    it('user can click and mode to tutorial page 4', function() {
        element.all(by.css(".swiper-pagination-bullet")).get(4).click();
        browser.sleep(sleepTime);
    });

    it('user can click and mode to tutorial page 5', function() {
        element.all(by.css(".swiper-pagination-bullet")).get(5).click();
        browser.sleep(sleepTimeLast);
        browser.close();
    });

});