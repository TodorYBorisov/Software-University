using System;

namespace _07._1.Moving
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int width = int.Parse(Console.ReadLine());
            int length = int.Parse(Console.ReadLine());
            int height = int.Parse(Console.ReadLine());

            int totalVolume = width * length * height;

            string input = Console.ReadLine();

            while (input != "Done")
            {

                int box = int.Parse(input);

                totalVolume -= box;

                if (totalVolume <= 0)
                {
                    Console.WriteLine($"No more free space! You need {Math.Abs(totalVolume)} Cubic meters more.");
                    break;
                }

                input = Console.ReadLine();

            }
            if (totalVolume > 0)
            {
                Console.WriteLine($"{totalVolume} Cubic meters left.");
            }
        }
    }
}
