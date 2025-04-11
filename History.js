import { Operation } from './Operations.js';

export class History 
{
    constructor() 
    {
        this.historyList = [];
    }

    add(operation, op1, op2, result) 
    {
        this.historyList.push([operation, op1, op2, result]);
    }

    display() 
    {
        console.log("Operation History:");

        for (const [op, a, b, res] of this.historyList) 
        {
            const symbol = 
                op === Operation.ADD ? '+' :
                op === Operation.SUBTRACT ? '-' :
                op === Operation.MULTIPLY ? '*' :
                op === Operation.DIVIDE ? '/' : '?';

            console.log(`${symbol} ${a}, ${b} = ${res}`);
        }
    }
}