const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function sum(number_1, number_2){
    return number_1 + number_2
}


Given('the result is {int}', function (int) {
// Given('the the result {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions  
    this.result = int;
});


When('ask the result of {int} plus {int}', function (int, int2) {
// When('ask the result of {int} plus {float}', function (int, float) {     
// When('ask the result of {float} plus {int}', function (float, int) {     
// When('ask the result of {float} plus {float}', function (float, float2) {
    // Write code here that turns the phrase above into concrete actions      
    this.actualResult = sum(int, int2);
});

Then('I should get the given result', function () {
// Then('I should get {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.actualResult, this.result )
});




