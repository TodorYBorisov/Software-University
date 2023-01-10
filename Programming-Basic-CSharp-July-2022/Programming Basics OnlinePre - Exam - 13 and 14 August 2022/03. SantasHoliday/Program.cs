using System;

namespace _03._SantasHoliday
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int days = int.Parse(Console.ReadLine());
            string accommodation = Console.ReadLine();
            string evaluation = Console.ReadLine();

            double finalSum = 0;


            switch (accommodation)
            {
                case "room for one person":

                    if (days < 10)
                    {
                        finalSum = (days - 1) * 18.00;
                    }
                    else if (days > 10 && days < 15)
                    {
                        finalSum = (days - 1) * 18.00;
                    }
                    else if (days > 15)
                    {
                        finalSum = (days - 1) * 18.00;
                    }
                    break;


                case "apartment":
                    if (days < 10)
                    {
                        finalSum = ((days - 1) * 25.00) * 0.7;
                    }
                    else if (days > 10 && days < 15)
                    {
                        finalSum = ((days - 1) * 25.00) * 0.65;
                    }
                    else if (days > 15)
                    {
                        finalSum = ((days - 1) * 25.00) * 0.5;
                    }
                    break;

                case "president apartment":
                    if (days < 10)
                    {
                        finalSum = ((days - 1) * 35.00) * 0.9;
                    }
                    else if (days > 10 && days < 15)
                    {
                        finalSum = ((days - 1) * 35.00) * 0.85;
                    }
                    else if (days > 15)
                    {
                        finalSum = ((days - 1) * 35.00) * 0.8;
                    }
                    break;
            }

            if (evaluation == "positive")
            {
                finalSum *= 1.25;
            }
            else if (evaluation == "negative")
            {
                finalSum *= 0.9;
            }

            Console.WriteLine($"{finalSum:f2}");
        }
    }
}
