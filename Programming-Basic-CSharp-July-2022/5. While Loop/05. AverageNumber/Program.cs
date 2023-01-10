using System;

namespace _05._AverageNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());

            int sumNumber = 0;

            //for (int i = 0; i < number; i++)
            //{
            //    int nextNumber = int.Parse(Console.ReadLine());

            //    sumNumber += nextNumber;
            //}

            while (number<0)
            {
                int nextNumber = int.Parse(Console.ReadLine());
                sumNumber += nextNumber;
            }
            double average = sumNumber * 1.0 / number;

            Console.WriteLine($"{average:f2}");
        }
    }
}
