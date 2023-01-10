using System;

namespace Journey
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            string season = Console.ReadLine();

            string destination = "";
            string place = "";

            switch (season)
            {
                case "summer":
                    if(season == "summer")
                    {
                        place = "Camp";
                    }
                    
                    if (budget <= 100)
                    {
                        destination = "Bulgaria";

                        budget *= 0.3;

                    }
                    else if (budget>100 &&  budget <= 1000)
                    {
                        destination = "Balkans";
                        budget *= 0.4;
                    }
                    else if (budget > 1000)
                    {
                        place = "Hotel";
                        destination = "Europe";
                       budget *= 0.9;
                    }
                    break;

                case "winter":
                    if(season == "winter")
                    {
                        place = "Hotel";
                    }
                    if (budget <= 100)
                    {
                        destination = "Bulgaria";
                        budget *= 0.7;
                    }
                    else if (budget <= 1000)
                    {
                        destination = "Balkans";
                        budget *= 0.8;
                    }
                    else if (budget > 1000)
                    {
                        destination = "Europe";
                        budget *= 0.9;
                    }
                    break;
            }
            Console.WriteLine($"Somewhere in {destination}");

            Console.WriteLine($"{place} - {budget:f2}");


        }
    }
}
