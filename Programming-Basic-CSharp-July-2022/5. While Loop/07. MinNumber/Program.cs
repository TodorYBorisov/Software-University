using System;

namespace _07._MinNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            
            int minValue = int.MaxValue;

            while (input != "Stop")
            {
                int currentNumber = int.Parse(input);

                if (currentNumber < minValue)
                {
                    minValue = currentNumber;
                }
                input = Console.ReadLine();
            }

            Console.WriteLine(minValue);
        }
    }
}
