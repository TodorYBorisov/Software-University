using System;

namespace BasketballEquipment
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Баскетболни кецове – цената им е 40 % по - малка от таксата за една година
            //Баскетболен екип – цената му е 20 % по - евтина от тази на кецовете
            //Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
            //Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

            int taxForYear = int.Parse(Console.ReadLine());

            double basketballShoes = taxForYear - (taxForYear * 0.4);
            //double basketballShoes = taxForYear * 0.6;
            double basketballOutfit = basketballShoes - (basketballShoes * 0.2);
            //double basketballOutfit = basketballShoes * 0.8);
            double basketballBall = basketballOutfit / 4;
            double basketballAccesoaries = basketballBall /5;

            double totalSum = taxForYear + basketballShoes + basketballOutfit + basketballBall + basketballAccesoaries;
            Console.WriteLine(totalSum);
        }
    }
}