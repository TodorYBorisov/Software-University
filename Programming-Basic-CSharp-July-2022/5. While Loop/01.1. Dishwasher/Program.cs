using System;

namespace _01._1._Dishwasher
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int bottlesDishwashing = int.Parse(Console.ReadLine());

            int totalDetergetnt = bottlesDishwashing * 750;

            int pots = 0;
            int dishes = 0;
            int consumptionDishes = 0;
            int consumptionPots = 0;
            int loading = 0;

            string command = Console.ReadLine();

            while (command != "End")
            {
                int washedVessel = int.Parse(command);

                loading++;

                if (loading % 3 == 0)
                {
                    pots += washedVessel;

                    consumptionPots = washedVessel * 15;

                    totalDetergetnt -= consumptionPots;
                }
                else
                {
                    dishes += washedVessel;
                    consumptionDishes = washedVessel * 5;
                    totalDetergetnt -= consumptionDishes;
                }

                if (totalDetergetnt < 0)
                {
                    Console.WriteLine($"Not enough detergent, {Math.Abs(totalDetergetnt)} ml. more necessary!");
                    return;
                }

                command = Console.ReadLine();

            }
            if (totalDetergetnt >= 0)
            {
                Console.WriteLine("Detergent was enough!");
                Console.WriteLine($"{dishes} dishes and {pots} pots were washed.");
                Console.WriteLine($"Leftover detergent {totalDetergetnt} ml.");
            }
        }
    }
}
