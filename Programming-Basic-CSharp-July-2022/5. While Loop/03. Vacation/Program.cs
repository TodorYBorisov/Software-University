using System;

namespace _03._Vacation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double neededMoney = double.Parse(Console.ReadLine());
            double ownedMoney = double.Parse(Console.ReadLine());

            int daysCounter = 0;
            int spendDaysCounter = 0;

            while (ownedMoney<neededMoney && spendDaysCounter < 5)
            {
                string command = Console.ReadLine();
                double money = double.Parse(Console.ReadLine());

                daysCounter++;

                if(command == "spend")
                {
                    spendDaysCounter++;
                    
                    ownedMoney -= money;

                    if (ownedMoney < 0)
                    {
                        ownedMoney = 0;
                    }

                    if(spendDaysCounter == 5)
                    {
                        Console.WriteLine($"You can't save the money.");
                        Console.WriteLine($"{daysCounter}");
                        break;
                    }

                }
                else if(command == "save")
                {
                    //зануляваме каунтъра ако не харчи последователно
                    spendDaysCounter = 0;

                    ownedMoney += money;

                    if (ownedMoney >= neededMoney)
                    {
                        Console.WriteLine($"You saved the money for {daysCounter} days.");
                        break;
                    }
                }
            }
        }
    }
}
