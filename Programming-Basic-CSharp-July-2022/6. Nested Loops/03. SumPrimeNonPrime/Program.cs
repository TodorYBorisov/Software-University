using System;

namespace _03._SumPrimeNonPrime
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int sumPrime = 0;
            int sumNonPrime = 0;

            string input = Console.ReadLine();

            while (input != "stop")
            {
                int currentNumber = int.Parse(input);
                int prime = 0; // брояч за простите числа, той трябва да е равен на 2, за да е просто числото

                if (currentNumber < 0)
                {
                    Console.WriteLine("Number is negative.");

                    input = Console.ReadLine();
                    continue;
                }

                if (currentNumber == 0)
                {
                    input = Console.ReadLine();
                    continue;
                }

                for (int i = 1; i <= currentNumber; i++)
                {
                    if (currentNumber % i == 0)
                    {
                        prime++;
                    }
                }

                if (prime == 2)
                {
                    sumPrime += currentNumber;
                }
                else
                {
                    sumNonPrime += currentNumber;
                }

                input = Console.ReadLine();
            }

            Console.WriteLine($"Sum of all prime numbers is: {sumPrime}");
            Console.WriteLine($"Sum of all non prime numbers is: {sumNonPrime}");
        }
    }
}
