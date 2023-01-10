using System;

namespace NewHouse
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string flower = Console.ReadLine();
            int numOfFlowers = int.Parse(Console.ReadLine());
            int budget = int.Parse(Console.ReadLine());

            double price = 0;

            switch (flower)
            {
                case "Roses":
                    price = 5;
                    break;

                case "Dahlias":
                    price = 3.8;
                    break;

                case "Tulips":
                    price = 2.8;
                    break;

                case "Narcissus":
                    price = 3.0;
                    break;

                case "Gladiolus":
                    price = 2.50;
                    break;

            }
            double totalSum = numOfFlowers * price;

            if(flower == "Roses" && numOfFlowers >80)
            {
                totalSum *= 0.9;
            }
            else if(flower =="Dahlias" && numOfFlowers > 90)
            {
                totalSum *= 0.85;
            }
            else if(flower== "Tulips" && numOfFlowers > 80)
            {
                totalSum *= 0.85;
            }
            else if(flower== "Narcissus" && numOfFlowers < 120)
            {
                totalSum *= 1.15;
            }
            else if( flower == "Gladiolus" && numOfFlowers < 80)
            {
                totalSum *= 1.2;
            }

            if (totalSum > budget)

            {
                double needMoney = totalSum - budget;

                Console.WriteLine($"Not enough money, you need {needMoney:f2} leva more.");
                
            }
            else if (totalSum <= budget) {

                double leftMoney = budget - totalSum;

                Console.WriteLine($"Hey, you have a great garden with {numOfFlowers} {flower} and {leftMoney:f2} leva left.");
            }
        }
    }
}
