using System;

namespace FoodDelivery
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double chikenMenu = 10.35;
            double fishMenu = 12.4;
            double vegeMenu = 8.15;
            double delivery = 2.5;

            int numChikenMenu = int.Parse(Console.ReadLine());
            int numfishMenu = int.Parse(Console.ReadLine());
            int numVegeMenu = int.Parse(Console.ReadLine());

            double sumMenu = numChikenMenu * chikenMenu + numfishMenu * fishMenu + numVegeMenu * vegeMenu;
            double sumDesert = sumMenu * 0.2;

            double finalPrice = sumMenu + sumDesert + delivery;
            Console.WriteLine(finalPrice);
        }
    }
}