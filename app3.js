

let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow >= 22) 
{
    greeting = 'Go to bed!';

}
else 
{
    greeting = 'Welcome to a website!';
}


document.write('<h2>' + greeting + '</h2>');


printUsername();