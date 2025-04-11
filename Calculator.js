import { Operation } from './Operations.js';
import { History } from './History.js';

export class Calculator 
{
    static history = new History();

    static add(a, b) 
    {
        const result = a + b;
        Calculator.history.add(Operation.ADD, a, b, result);
        return result;
    }

    static subtract(a, b) 
    {
        const result = a - b;
        Calculator.history.add(Operation.SUBTRACT, a, b, result);
        return result;
    }

    static multiply(a, b) 
    {
        const result = a * b;
        Calculator.history.add(Operation.MULTIPLY, a, b, result);
        return result;
    }

    static divide(a, b) 
    {
        if (b === 0) 
        {
            console.log("Division by zero.");
            Calculator.history.add(Operation.DIVIDE, a, b, 0);
            return 0;
        }

        const result = a / b;
        Calculator.history.add(Operation.DIVIDE, a, b, result);
        return result;
    }

    static printHistory() 
    {
        Calculator.history.display();
    }
}
