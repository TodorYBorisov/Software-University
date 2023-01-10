using System;

namespace _08._NumberSequence
{
    internal class Program
    {
        static void Main(string[] args)
        {

            int minNumber = int.MaxValue;
            int maxNumber = int.MinValue;

            int numberOfRows = int.Parse(Console.ReadLine());

            for (int i = 0; i < numberOfRows; i++)
            {
                int currentNumber = int.Parse(Console.ReadLine());

                if(currentNumber > maxNumber)
                {
                    maxNumber = currentNumber;
                }

                if (currentNumber < minNumber)
                {
                    minNumber = currentNumber;
                }              
            }
            Console.WriteLine($"Max number: {maxNumber}");
            Console.WriteLine($"Min number: {minNumber}");
        }
    }
}
