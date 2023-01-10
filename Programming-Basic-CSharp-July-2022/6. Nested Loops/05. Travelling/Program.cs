using System;

namespace _05._Travelling
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string destination = Console.ReadLine();

            while (destination != "End")
            {
                //тук четем сумата която ни е нужна за да посетим първата дестинация
                double budget = double.Parse(Console.ReadLine());

                double savedMoney = 0;

                //тук правим още един while, за да може да четем постоянно сумите!
                while (savedMoney < budget)
                {
                    savedMoney += double.Parse(Console.ReadLine());
                }
                Console.WriteLine($"Going to {destination}!");

                destination = Console.ReadLine();
            }
        }
    }
}
