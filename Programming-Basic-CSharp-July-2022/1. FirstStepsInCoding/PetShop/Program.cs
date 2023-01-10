using System;

namespace PetShop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double dogFood = 2.50;
            double catFood = 4.0;

            int TheNumberOfPackagesOfDogFood = int.Parse(Console.ReadLine());
            int TheNumberOfPackagesOfCatFood = int.Parse(Console.ReadLine());

            double finalPrice = TheNumberOfPackagesOfDogFood * dogFood + TheNumberOfPackagesOfCatFood * catFood;

            Console.WriteLine(finalPrice+ " lv.");
        }
    }
}
