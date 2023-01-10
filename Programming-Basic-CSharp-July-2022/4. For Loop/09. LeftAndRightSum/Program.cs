using System;

namespace _09._LeftAndRightSum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberOfRows = int.Parse(Console.ReadLine());

            int sumLeft = 0;
            int sumRight = 0;

            for (int value = 0; value < 2 * numberOfRows; value++)
            {
                int number = int.Parse(Console.ReadLine());

                if (value < numberOfRows)
                {
                    sumLeft += number;
                }
                else
                {
                    sumRight += number; 
                }
            }

            if(sumLeft == sumRight)
            {
                Console.WriteLine($"Yes, sum = {sumLeft}");
            } 
            else
            {
                Console.WriteLine($"No, diff = {Math.Abs(sumLeft-sumRight)}");
            }
        }
    }
}
