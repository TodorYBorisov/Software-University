using System;

namespace Shopping
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            int numOfVideoCard = int.Parse(Console.ReadLine());
            int numOfProcesor = int.Parse(Console.ReadLine());
            int numOfRam = int.Parse(Console.ReadLine());

            double PriceForVideoCards = numOfVideoCard * 250;
            double PriceForProcesor = PriceForVideoCards * 0.35;
            double PriceForRam = PriceForVideoCards * 0.1;

            double totalBudget = PriceForVideoCards + (numOfProcesor * PriceForProcesor) + (numOfRam * PriceForRam);

            if (numOfVideoCard > numOfProcesor)
            {
                totalBudget = totalBudget * 0.85;
            }
            if (budget >= totalBudget)
            {
                double moneyLeft = budget - totalBudget;

                Console.WriteLine($"You have {moneyLeft:f2} leva left!");
            }
            else if (budget < totalBudget)
            {
                double moneyNeeded = totalBudget - budget;
                Console.WriteLine($"Not enough money! You need {moneyNeeded:f2} leva more!");
            }
        }
    }
}
