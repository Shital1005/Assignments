 
 import {test} from '@playwright/test';
 
 
 test ('to Verify the log in',async({})=>{
    console.log("Group 1 test case")
 })

 test('Group 1 test case2',async({})=>{
    console.log("Group 1 test case 2")
 })

 test ('Group 1 test case3',async({})=>{
    console.log("gropu 1 test case 3")
 })

 
 test .describe ('describe block',async()=>{

    //group hooks
    test.beforeAll('beforall',async({})=>{
    console.log("@@@@@...Before all....@@@@@")
 })

 test.afterAll('After all',async({})=>{
    console.log("####...After all....####")
 })

 test.beforeEach('before each',async({})=>{
    console.log("***Before each****")
 })
 test.afterEach('after each',async({})=>{
    console.log("$$$.....after each....$$$$")
 })
    
 test ('Group2 test case',async({})=>{
    console.log("Group 2 test case")
 })

 test('Group 2 test case2',async({})=>{
    console.log("Group 2 test case 2")
 })

 test ('Group 2 test case3',async({})=>{
    console.log("gropu 2 test case 3")
 })
})