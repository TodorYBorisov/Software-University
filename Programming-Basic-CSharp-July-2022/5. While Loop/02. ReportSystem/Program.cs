using System;

namespace _02._ReportSystem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int moneyNeeded = int.Parse(Console.ReadLine());

            string input = Console.ReadLine();

            int cashCounter = 0;
            int creditCardCounter = 0;

            int counter = 0;

            double totalSum = 0;

            double sumByCard = 0;
            double sumByCash = 0;

            bool hasEnoughMoney = false;

            while (input != "End")
            {
                int priceMoney = int.Parse(input);

                if (counter % 2 == 0)
                {
                    if (priceMoney > 100)
                    {
                        Console.WriteLine("Error in transaction!");
                    }
                    else
                    {
                        Console.WriteLine("Product sold!");
                        sumByCash += priceMoney;
                        cashCounter++;
                    }
                }
                else
                {
                    if (priceMoney < 10)
                    {
                        Console.WriteLine("Error in transaction!");
                    }
                    else
                    {
                        Console.WriteLine("Product sold!");
                        sumByCard += priceMoney;
                        creditCardCounter++;
                    }
                }
                totalSum = sumByCard + sumByCash;
                if (totalSum >= moneyNeeded)
                {
                    hasEnoughMoney = true;
                    break;
                }
                input = Console.ReadLine();
                counter++;
            }
            if (hasEnoughMoney)
            {
                Console.WriteLine($"Average CS: {sumByCash / cashCounter:F2}");
                Console.WriteLine($"Average CC: {sumByCard / creditCardCounter:F2}");
            }
            else
            {
                Console.WriteLine($"Failed to collect required money for charity.");
            }
        }
    }
}
