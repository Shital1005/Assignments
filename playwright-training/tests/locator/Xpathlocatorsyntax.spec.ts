//Syntax 1: //tagName[@attribute='value']
//Syntax 2: //tagName[text()='value']

/****************************************************/
/****************LEVEL 2- contains , starts-with*****/
/****************************************************/
//Syntax 3: //tagName[contains(@attribute,'value')]
//Syntax 4: //tagName[starts-with(@attribute,'value')]
//Syntax 5: //tagName[contains(text(),'value')]
//Syntax 6: //tagName[starts-with(text(),'value')]

/****************************************************/
/****LEVEL 3- Combine multiple attributes using AND**/
/****************************************************/
//Syntax 7: //tagName[@attribute1='value' and @attribute2='value' and text()='value']

/****************************************************/
/****LEVEL 4- Advanced Xpath With Relationships******/
/****************************************************/

//Syntax 8: referenceElementXpath/relationship::targetElementXpath