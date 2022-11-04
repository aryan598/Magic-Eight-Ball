
let username = ''; //if you wish you can enter your name

username ? console.log(`Hello ${username}.`) : console.log('Hello Stranger.');

const userQuestion = 'Are aliens real?'; //enter your question here

if (userQuestion) {
    console.log(`You asked the question: ${userQuestion}`);

    const randomNumber = Math.floor(Math.random()*20);

    let eightBall = '';

    switch(randomNumber){
        case 0:
            eightBall = 'As I see it, yes';
            break;
        case 1:
            eightBall = 'Ask again later';
            break;
        case 2:
            eightBall = 'Better not tell you now';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Concentrate and ask again';
            break;
        case 5:
            eightBall = "Don't count on it";
            break;
        case 6:
            eightBall = 'It is certain';
            break;
        case 7:
            eightBall = 'It is decidedly so';
            break;
        case 8:
            eightBall = 'Most likely';
            break;
        case 9:
            eightBall = 'My reply is no';
            break;
        case 10:
            eightBall = 'My sources say no';
            break;
        case 11:
            eightBall = 'Outlook good';
            break;
        case 12:
            eightBall = 'Outlook not so good';
            break;
        case 13:
            eightBall = 'Reply hazy try again';
            break;
        case 14:
            eightBall = 'Signs point to yes';
            break;
        case 15:
            eightBall = 'Very doubtful';
            break;
        case 16:
            eightBall = 'Without a doubt';
            break;
        case 17:
            eightBall = 'Yes';
            break;
        case 18:
            eightBall = 'Yes, definitely';
            break;
        case 19:
            eightBall = 'You may rely on it';
            break;
    };

    console.log(`Magic Eight Ball Replied: ${eightBall}.`);
} else {
    console.log('You did not ask any question.');
};
