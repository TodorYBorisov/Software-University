using System;

namespace _07._Moving
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int width = int.Parse(Console.ReadLine());
            int length = int.Parse(Console.ReadLine());
            int height = int.Parse(Console.ReadLine());

            int totalVolume = width * length * height;

            while (totalVolume>0)
            {
                string input = Console.ReadLine();

                if(input == "Done")
                {
                    break;
                }

                int box = int.Parse(input);

                totalVolume -= box;
            }

            if (totalVolume >= 0)
            {
                Console.WriteLine($"{totalVolume} Cubic meters left.");
            }
            else
            {
                Console.WriteLine($"No more free space! You need {Math.Abs(totalVolume)} Cubic meters more.");
            }
        }
    }
}
