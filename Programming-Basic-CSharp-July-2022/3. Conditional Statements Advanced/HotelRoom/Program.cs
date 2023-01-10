using System;

namespace HotelRoom
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string month = Console.ReadLine();
            int nights = int.Parse(Console.ReadLine());

            //double price = 0;
            double priceForStudio = 0;
            double priceForApartment = 0;


            if (month == "May" || month == "October")
            {
                priceForStudio = 50;
                priceForApartment = 65;

                if (nights > 7 && nights < 14)
                {
                    priceForStudio *= 0.95;
                }
                else if (nights > 14)
                {
                    priceForStudio *= 0.7;
                    priceForApartment *= 0.9;
                }

            }
            else if (month == "June" || month == "September")
            {
                priceForStudio = 75.20;
                priceForApartment = 68.70;
                if (nights > 14)
                {
                    priceForStudio *= 0.8;
                    priceForApartment *= 0.9;
                }
            }
            else if (month == "July" || month == "August")
            {
                priceForStudio = 76;
                priceForApartment = 77;
                if (nights > 14)
                {
                    priceForApartment *= 0.9;
                }
            }
            double finalSumApartment = priceForApartment * nights;
            double finalSumStudio = priceForStudio * nights;
            

            Console.WriteLine($"Apartment: {finalSumApartment:f2} lv.");
            Console.WriteLine($"Studio: {finalSumStudio:f2} lv.");
        }
    }
}
