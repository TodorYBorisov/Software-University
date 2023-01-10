using System;

namespace GodzillaVsKong
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double movieBudget = double.Parse(Console.ReadLine());
            int numOfStatist = int.Parse(Console.ReadLine());
            double priceForClothesPerStatist = double.Parse(Console.ReadLine());

            double decor = movieBudget * 0.1;

            double sumForClothes = numOfStatist * priceForClothesPerStatist;

            double discoutForClothes = 0; 

            if ( numOfStatist >=150)
            {

                discoutForClothes = sumForClothes * 0.1;
            }

            double finalSum = (sumForClothes - discoutForClothes) + decor;

            if(finalSum > movieBudget)
            {
                double neededMoney = finalSum - movieBudget;
                Console.WriteLine("Not enough money!");
                Console.WriteLine($"Wingard needs {neededMoney:f2} leva more.");
            }
            else if (finalSum <= movieBudget)
            {
                double moneyLeft = movieBudget - finalSum;
                Console.WriteLine("Action!");
                Console.WriteLine($"Wingard starts filming with {moneyLeft:f2} leva left.");
            }
        }
    }
}
