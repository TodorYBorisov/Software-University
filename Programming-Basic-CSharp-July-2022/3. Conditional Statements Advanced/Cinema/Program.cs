using System;

namespace Cinema
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string screening = Console.ReadLine();
            int row = int.Parse(Console.ReadLine());
            int col = int.Parse(Console.ReadLine());

            double price = 0;

            switch (screening)
            {
                case "Premiere":
                    price = 12.00;
                    break;
                case "Normal":
                    price = 7.50;
                    break;
                case "Discount":
                    price = 5.00;
                    break;
            }
            double totalIncome = (row * col) * price;

            Console.WriteLine($"{totalIncome:f2} leva");
        }
    }
}
