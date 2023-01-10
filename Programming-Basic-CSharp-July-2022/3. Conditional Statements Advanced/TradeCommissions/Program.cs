using System;

namespace TradeCommissions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string city = Console.ReadLine();
            double sales = double.Parse(Console.ReadLine());

            double commision = 0;

            if (city == "Sofia")
            {
                if (0 <= sales && sales <= 500)
                {
                    commision = sales * 0.05;
                }
                else if (500 < sales && sales <= 1000)
                {
                    commision = sales * 0.07;
                }
                else if (1000 < sales && sales <= 10000)
                {
                    commision = sales * 0.08;
                }
                else if (sales > 10000)
                {
                    commision = sales * 0.12;
                }
                else
                {
                    Console.WriteLine("error");
                }

            }
            else if (city == "Varna")
            {
                if (0 <= sales && sales <= 500)
                {
                    commision = sales * 0.045;
                }
                else if (500 < sales && sales <= 1000)
                {
                    commision = sales * 0.075;
                }
                else if (1000 < sales && sales <= 10000)
                {
                    commision = sales * 0.1;
                }
                else if (sales > 10000)
                {
                    commision = sales * 0.13;
                }
                else
                {
                    Console.WriteLine("error");
                }
            }
            else if (city == "Plovdiv")
            {
                if (0 <= sales && sales <= 500)
                {
                    commision = sales * 0.055;
                }
                else if (500 < sales && sales <= 1000)
                {
                    commision = sales * 0.08;
                }
                else if (1000 < sales && sales <= 10000)
                {
                    commision = sales * 0.12;
                }
                else if (sales > 10000)
                {
                    commision = sales * 0.145;
                }
                else
                {
                    Console.WriteLine("error");
                }

            }
            else
            {
                Console.WriteLine("error");
            }

            double finalSum = sales * commision;

            if (sales > 0)
            {
                Console.WriteLine($"{finalSum:f2}");
            }
        }
    }
}
