using System;

namespace _02._HalfSumElement
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberOfRows = int.Parse(Console.ReadLine());

            int maxValue = int.MinValue;
            
            int sum = 0;

            for (int value = 0; value < numberOfRows; value++)
            {
                int currentNumber = int.Parse(Console.ReadLine());
                
                sum += currentNumber;


                if (currentNumber > maxValue)
                {
                    maxValue = currentNumber;
                }
            }

            int sumWithoutMaxValue = sum - maxValue;

            if(maxValue == sumWithoutMaxValue)
            {
                Console.WriteLine("Yes");
                Console.WriteLine($"Sum = {maxValue}");
            }
            else
            {
                int diff = Math.Abs(maxValue - sumWithoutMaxValue);
                Console.WriteLine("No");
                Console.WriteLine($"Diff = {diff}");
            }
        }
    }
}
