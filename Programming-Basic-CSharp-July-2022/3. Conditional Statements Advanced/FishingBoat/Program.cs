using System;

namespace FishingBoat
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int budget = int.Parse(Console.ReadLine());
            string season = Console.ReadLine();
            int numOfFishermen = int.Parse(Console.ReadLine());

            double price = 0;

            switch (season)
            {
                case "Spring":
                    price = 3000;
                    break;
                case "Summer":
                    price = 4200;
                    break;
                case "Autumn":
                    price = 4200;
                    break;
                case "Winter":
                    price = 2600;
                    break;

            }
            //double finalPrice = season * price;

            if (numOfFishermen <= 6)
            {
                price *= 0.9;

            }
            else if( numOfFishermen>=7 && numOfFishermen <= 11)
            {
                price *= 0.85;
            }
            else if (numOfFishermen > 12)
            {
                price *= 0.75;
            }


            if(numOfFishermen % 2 ==0 && season != "Autumn")
            {
                price *= 0.95;
            }

            double difference = Math.Abs(price - budget);

            if (budget >= price)
            {
                Console.WriteLine($"Yes! You have {difference:f2} leva left.");
            }
            else if (budget<price)
            {
                Console.WriteLine($"Not enough money! You need {difference:f2} leva.");
            }
        }
    }
}
