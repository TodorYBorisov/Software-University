using System;

namespace _04._CleverLily
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int age = int.Parse(Console.ReadLine());

            double washingMashine = double.Parse(Console.ReadLine());

            int pricePerToy = int.Parse(Console.ReadLine());

            int toys = 0;
            int money = 0;
            int evenBirthday = 0;
            int extraMoney = 0;

            for (int i = 1; i <= age; i++)
            {
                if (i % 2 == 0)
                {
                    evenBirthday++;
                    extraMoney += 10;
                    money += extraMoney;

                }
                else
                {
                    toys += 1;
                }
            }
            int savedSum = toys * pricePerToy + money - evenBirthday;

            if (washingMashine <= savedSum)
            {
                Console.WriteLine($"Yes! {savedSum-washingMashine:f2}");
            }
            else
            {
                Console.WriteLine($"No! {washingMashine-savedSum:f2}");
            }
        }
    }
}
