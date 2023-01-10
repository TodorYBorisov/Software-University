using System;

namespace SmallShop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine();
            string city = Console.ReadLine();
            double qnt = double.Parse(Console.ReadLine());

            double price = 0;
            

            if (city == "Sofia")
            {
                switch (product)
                {
                    case "coffee":
                        price = 0.5;
                        break;
                    case "water":
                        price = 0.80;
                        break;
                    case "beer":
                        price = 1.20;
                        break;
                    case "sweets":
                        price = 1.45;
                        break;
                    case "peanuts":
                        price = 1.60;
                        break;
                }
                //double finalSum = qnt * price;
                //Console.WriteLine(finalSum);
            }
            else if (city == "Plovdiv")
            {
                switch (product)
                {
                    case "coffee":
                        price = 0.4;
                        break;
                    case "water":
                        price = 0.70;
                        break;
                    case "beer":
                        price = 1.15;
                        break;
                    case "sweets":
                        price = 1.30;
                        break;
                    case "peanuts":
                        price = 1.50;
                        break;
                }
               // double finalSum = qnt * price;
               // Console.WriteLine(finalSum);
            }
            else if (city == "Varna")
            {
                switch (product)
                {
                    case "coffee":
                        price = 0.45;
                        break;
                    case "water":
                        price = 0.70;
                        break;
                    case "beer":
                        price = 1.10;
                        break;
                    case "sweets":
                        price = 1.35;
                        break;
                    case "peanuts":
                        price = 1.55;
                        break;
                }
               // double finalSum = qnt * price;
               // Console.WriteLine(finalSum);
            }
            double finalSum = qnt * price;
            Console.WriteLine(finalSum);
        }
    }
}
