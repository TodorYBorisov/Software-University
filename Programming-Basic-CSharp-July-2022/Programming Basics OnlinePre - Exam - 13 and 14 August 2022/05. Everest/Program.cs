using System;

namespace _05._Everest
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int startMeters = 5364;
            int peakHeght = 8848;
            int days = 1;

            string command = Console.ReadLine();

            while (command != "END")
            {
                int metersToHike = int.Parse(Console.ReadLine());

                if (command == "Yes")
                {
                    days++;
                    startMeters += metersToHike;

                    if (days == 5)
                    {
                        Console.WriteLine("Failed!");
                        Console.WriteLine($"{startMeters}");
                        break;
                    }
                    else if (startMeters > peakHeght)
                    {
                        Console.WriteLine($"Goal reached for {days} days!");
                        break;
                    }
                }
                else if (command == "No")
                {
                    days += 0;
                    startMeters += metersToHike;

                    if (days == 5)
                    {
                        Console.WriteLine("Failed!");
                        Console.WriteLine($"{startMeters}");
                        break;
                    }
                    else if (startMeters > peakHeght)
                    {
                        Console.WriteLine($"Goal reached for {days} days!");
                        break;
                    }
                }
                command = Console.ReadLine();
            }
            if (days < 5 && startMeters == peakHeght)
            {
                Console.WriteLine($"Goal reached for {days} days!");
            }
            if (command == "END")
            {
                Console.WriteLine("Failed!");
                Console.WriteLine($"{startMeters}");
            }
        }
    }
}
