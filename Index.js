import readline from 'readline';
import { Calculator } from './Calculator.js';

const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout
});

function askOperation() 
{
    rl.question('\nEnter operation (+, -, *, /) or any other key to exit: ', (choice) => 
    {
        if (!['+', '-', '*', '/'].includes(choice)) 
        {
            console.log("\nFinal History:");
            Calculator.printHistory();
            rl.close();
            return;
        }

        rl.question('Enter two numbers separated by space: ', (input) => 
        {
            const [aStr, bStr] = input.trim().split(' ');
            const a = parseFloat(aStr);
            const b = parseFloat(bStr);

            switch (choice) 
            {
                case '+':
                    console.log("Result:", Calculator.add(a, b));
                    break;
                case '-':
                    console.log("Result:", Calculator.subtract(a, b));
                    break;
                case '*':
                    console.log("Result:", Calculator.multiply(a, b));
                    break;
                case '/':
                    console.log("Result:", Calculator.divide(a, b));
                    break;
            }

            askOperation();
        });
    });
}

askOperation();
