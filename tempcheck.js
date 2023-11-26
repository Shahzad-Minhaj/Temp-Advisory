/*          Assignment: Temperature advisory Program          */


// Prompt the user to enter the outside temperature and convert it to a number
var outsideTemp = Number(prompt("What is the temperature outside?"));

// Check if the temperature is less than to 0 or in between 0 and 10
if (outsideTemp < 0 || outsideTemp > 0 && outsideTemp < 10) 
{
    // If so, alert the user to stay inside the house
    alert("You better stay inside the house");
}

// Check if the temperature is greater than or equal to 10 and less than 20
else if (outsideTemp >= 10 && outsideTemp < 20) 
{
    // If so, alert the user that they can go outside with an overcoat
    alert("You can go outside with an overcoat");
} 
else
{
    // If the temperature doesn't meet the previous conditions, alert the user that they can go outside
    alert("You can go outside");
}
