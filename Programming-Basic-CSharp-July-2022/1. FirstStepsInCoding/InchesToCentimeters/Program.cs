using System;

namespace InchesToCentimeters
{
    internal class Program
    {
        static void Main()
        {
            double inch = double.Parse(Console.ReadLine());
            double centimeter = inch * 2.54;

            Console.WriteLine(centimeter);
        }
    }
}