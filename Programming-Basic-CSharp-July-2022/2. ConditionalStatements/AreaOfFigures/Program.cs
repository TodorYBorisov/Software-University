using System;

namespace AreaOfFigures
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string figure = Console.ReadLine();

            if (figure == "square")
            {
                double side = double.Parse(Console.ReadLine());
                double area = side * side;
                Console.WriteLine($"{area:f3}");
            }
            else if (figure == "rectangle")
            {
                double sideA = double.Parse(Console.ReadLine());
                double sideB = double.Parse(Console.ReadLine());

                double result = sideA * sideB;
                Console.WriteLine($"{result:f3}");
            }
            else if (figure == "circle")
            {
                double radius = double.Parse(Console.ReadLine());
                double result = radius * radius * Math.PI;
                Console.WriteLine($"{result:f3}");

            }
            else if (figure == "triangle")
            {
                double sideA = double.Parse(Console.ReadLine());
                double sideH = double.Parse(Console.ReadLine());

                double result = sideA * sideH / 2;
                Console.WriteLine($"{result:f3}");
            }
        }
    }
}
