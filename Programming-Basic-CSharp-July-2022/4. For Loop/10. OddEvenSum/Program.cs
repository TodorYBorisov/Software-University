using System;

namespace _10._OddEvenSum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberOfRows = int.Parse(Console.ReadLine());
            
            int oddSum = 0;
            int evenSum = 0;

            for (int value = 1; value <= numberOfRows; value++)
            {
                int currenNumber = int.Parse(Console.ReadLine());

                if(value % 2 == 0)
                {
                    evenSum += currenNumber;
                }
                else
                {
                    oddSum += currenNumber;
                }
            }

            if (oddSum == evenSum)
            {
                Console.WriteLine("Yes");
                Console.WriteLine($"Sum = {evenSum}");
            }
            else
            {
                Console.WriteLine("No");
                Console.WriteLine($"Diff = {Math.Abs(oddSum-evenSum)}");
            }
        }
    }
}
