using System;

namespace _03._Histogram
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberOfRows = int.Parse(Console.ReadLine());

            int group1 = 0;
            int group2 = 0;
            int group3 = 0;
            int group4 = 0;
            int group5 = 0;


            for (int i = 1; i <= numberOfRows; i++)
            {
                int currentNumber = int.Parse(Console.ReadLine());


                if (currentNumber < 200)
                {
                    group1 += 1;
                }
                else if (currentNumber >= 200 && currentNumber <= 399)
                {
                    group2 += 1;
                }
                else if (currentNumber >= 400 && currentNumber <= 599)
                {
                    group3 += 1;
                }
                else if (currentNumber >= 600 && currentNumber <= 799)
                {
                    group4 += 1;
                }
                else if (currentNumber >= 800)
                {
                    group5 += 1;
                }
            }
            double p1 = group1 * 1.0 / numberOfRows * 100;
            double p2 = group2 * 1.0 / numberOfRows * 100;
            double p3 = group3 * 1.0 / numberOfRows * 100;
            double p4 = group4 * 1.0 / numberOfRows * 100;
            double p5 = group5 * 1.0 / numberOfRows * 100;

            Console.WriteLine($"{p1:f2}%");
            Console.WriteLine($"{p2:f2}%");
            Console.WriteLine($"{p3:f2}%");
            Console.WriteLine($"{p4:f2}%");
            Console.WriteLine($"{p5:f2}%");
        }

    }
}