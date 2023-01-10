using System;

namespace _03._SumNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());

            int sumNumber = 0;

            while (number>sumNumber)
            {
                int currentNumber = int.Parse(Console.ReadLine());
                
                sumNumber += currentNumber;
            }
            Console.WriteLine(sumNumber);
        }
    }
}
