using System;

namespace GreaterNumber
{
    internal class Program
    {
        static void Main()
        {
            int numA = int.Parse(Console.ReadLine());
            int numB = int.Parse(Console.ReadLine());

            if (numA > numB)
            {
                Console.WriteLine(numA);
            }
            else
            {
                Console.WriteLine(numB);
            }
        }
    }
}