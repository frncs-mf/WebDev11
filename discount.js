var amount = window.prompt("Enter amount: ");
amount = parseInt(amount);
switch(true) 
{
    case amount>=1000 && amount < 5000:
        let price = amount * 0.90;
        console.log('Amount:'+amount+'\nDiscounted Amount: '+price);
        break;
    case amount>=5000 && amount < 10000:
        let disprice = amount * 0.80;
        console.log('Amount'+amount+'\nDiscounted Amount: '+disprice);
        break;
    case amount>=10000:
        let disprices = amount * 0.70;
        console.log('Amount'+amount+'\nDiscounted Amount: '+disprices);
        break;

    default:
        console.log('Amount:'+amount+'\nDiscounted Amount: '+amount);
}
