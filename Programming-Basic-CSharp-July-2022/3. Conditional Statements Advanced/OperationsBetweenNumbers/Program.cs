using System;

namespace OperationsBetweenNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num1 = int.Parse(Console.ReadLine());
            int num2 = int.Parse(Console.ReadLine());

            char operation = char.Parse(Console.ReadLine());

            double result = 0;

            switch (operation)
            {
                case '+':
                    result = num1 + num2;
                    if (result % 2 == 0)
                    {
                        Console.WriteLine($"{num1} + {num2} = {result} - even");
                    }
                    else if (result % 2 == 1)
                    {
                        Console.WriteLine($"{num1} + {num2} = {result} - odd"); 
                    }
                    
                    break;
                case '-':
                    result = num1 - num2;
                    if (result % 2 == 0)
                    {
                        Console.WriteLine($"{num1} - {num2} = {result} - even");
                    }
                    else if (result % 2 == 1)
                    {
                        Console.WriteLine($"{num1} - {num2} = {result} - odd");
                    }
                    break;
                case '*':
                    result = num1 * num2;
                    if (result % 2 == 0)
                    {
                        Console.WriteLine($"{num1} * {num2} = {result} - even");
                    }
                    else if (result % 2 == 1)
                    {
                        Console.WriteLine($"{num1} * {num2} = {result} - odd");
                    }
                    break;                    
                case '/':                
                    if(num2 == 0)
                    {
                        Console.WriteLine($"Cannot divide {num1} by zero");
                    }
                    else
                    {
                        result = (double)num1 / num2;
                        //тук сме кастнали делимото , с double пред самото число.
                        
                        Console.WriteLine($"{num1} / {num2} = {result:f2}");
                    }                    
                    break;
                case '%':

                    if(num2 != 0)
                    {
                        result = num1 % num2;
                        Console.WriteLine($"{num1} % {num2} = {result}");
                    }
                    else
                    {
                        Console.WriteLine($"Cannot divide {num1} by zero");
                    }
                    break;
            }          
        }
    }
}
