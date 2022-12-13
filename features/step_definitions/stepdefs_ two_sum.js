const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert');

function two_sum(nums, target){
    return [0, 1]
}

Given('an array of integers [{int}, {int}, {int}]', function (int, int2, int3) {
// Given('an array of integers [{int}, {int}, {float}][]', function (int, int2, float) {
// Given('an array of integers [{int}, {float}, {int}][]', function (int, float, int2) {
// Given('an array of integers [{int}, {float}, {float}][]', function (int, float, float2) {
// Given('an array of integers [{float}, {int}, {int}][]', function (float, int, int2) {
// Given('an array of integers [{float}, {int}, {float}][]', function (float, int, float2) {
// Given('an array of integers [{float}, {float}, {int}][]', function (float, float2, int) {
// Given('an array of integers [{float}, {float}, {float}][]', function (float, float2, float3) {
// Write code here that turns the phrase above into concrete actions        
    this.nums  = [int, int2, int3]
});


Given('an integer {int}', function (int) {
// Given('an integer {float}', function (float) {
// Write code here that turns the phrase above into concrete actions        
    this.target = int;
});


When('search to numbers such that they add up to target', function () {       
// Write code here that turns the phrase above into concrete actions        
    this.expectIndices = two_sum(this.nums, this.target);
});


When('return the indices of the numbers', function () {
// Write code here that turns the phrase above into concrete actions  
    let actualTarget = this.nums[this.expectIndices[0]] + this.nums[this.expectIndices[1]]
    assert.equal(this.target, actualTarget)
    
});


Then('the result should be equal to [{int}, {int}]', function (int, int2) {   
// Then('the result should be equal to [{int}, {float}]', function (int, float) {
// Then('the result should be equal to [{float}, {int}]', function (float, int) {
// Then('the result should be equal to [{float}, {float}]', function (float, float2) {
// Write code here that turns the phrase above into concrete actions        
    assert.deepStrictEqual(this.expectIndices, [int, int2])
});