using System;

namespace _05._AccountBalance
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            double balance = 0.0;

            while (input != "NoMoreMoney")
            {
                double amount = double.Parse(input);
                if (amount < 0)
                {
                    Console.WriteLine($"Invalid operation!");
                    break;                
                }
                Console.WriteLine($"Increase: {amount:F2}");
               
                balance += amount;

                input = Console.ReadLine();
            } 
            Console.WriteLine($"Total: {balance:F2}");
        }
    } 
}

