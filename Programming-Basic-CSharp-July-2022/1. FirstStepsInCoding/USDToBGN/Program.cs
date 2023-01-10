using System;

namespace USDToBGN
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double BGN = 1.79549;
            double USD = double.Parse(Console.ReadLine());
            Console.WriteLine(USD*BGN);
        }
    }
}
