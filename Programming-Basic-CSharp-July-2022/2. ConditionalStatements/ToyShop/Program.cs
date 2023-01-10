using System;

namespace ToyShop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double priceOfTheExcursion = double.Parse(Console.ReadLine());
            int numOfPuzzles = int.Parse(Console.ReadLine());
            int numOfTalkingDolls = int.Parse(Console.ReadLine());
            int numOfTedyBears = int.Parse(Console.ReadLine());
            int numOfMinions = int.Parse(Console.ReadLine());
            int numOfTrucks = int.Parse(Console.ReadLine());

            double puzzel = 2.6;
            double talkingDoll = 3.0;
            double teddyBear = 4.10;
            double minion = 8.20;
            double truck = 2.0;

            int numOfToys = numOfPuzzles +  numOfTalkingDolls + numOfTedyBears + numOfMinions + numOfTrucks;

            double sumTotal =  (numOfPuzzles * puzzel) + (numOfTalkingDolls * talkingDoll) + (numOfTedyBears * teddyBear) + (numOfMinions * minion) + (numOfTrucks * truck);
            
            double discout = 0;
            

            if (numOfToys >= 50)
            {
                discout = sumTotal * 0.25;
                sumTotal = sumTotal - discout;
            }

            double rent = sumTotal * 0.1;

            double finalIncome = sumTotal - rent;

            if (finalIncome >= priceOfTheExcursion)
            {
                double moneyLeft = finalIncome - priceOfTheExcursion;
                Console.WriteLine($"Yes! {moneyLeft:f2} lv left.");
            }
            else
            {
                double moneyNeeded = priceOfTheExcursion - finalIncome;
                Console.WriteLine($"Not enough money! {moneyNeeded:f2} lv needed.");
            }
        }
    }
}
