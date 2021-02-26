

function printUsername()
{
    //grab name from user
    let username = prompt("Please enter a name:");

    //set statement with name
    let nameMessage = (username + ' is a sillyhead');

    //grab value for current hour
    let today = new Date();
    let hourNow = today.getHours();
    
    //append hourNow number of exclamation points to message
    for (let i = 0; i < hourNow; i++)
    {
        nameMessage = nameMessage + '!';
    }

    //print name message
    document.write('<h2>' + nameMessage + '<h2>');
}

 printUsername();
