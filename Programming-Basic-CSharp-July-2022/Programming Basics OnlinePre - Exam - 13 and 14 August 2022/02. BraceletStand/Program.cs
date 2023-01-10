using System;

namespace _02._BraceletStand
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double TerezaPocketMoneyPerDay = double.Parse(Console.ReadLine());

            double moneyFromSales = double.Parse(Console.ReadLine());

            double expensesTereza = double.Parse(Console.ReadLine());

            double giftPrice = double.Parse(Console.ReadLine());

            double pocketMoney = TerezaPocketMoneyPerDay * 5;

            double moneySales = moneyFromSales * 5;

            double totalSavedMoney = pocketMoney + moneySales - expensesTereza;

            if (totalSavedMoney > giftPrice)
            {
                Console.WriteLine($"Profit: {totalSavedMoney:f2} BGN, the gift has been purchased.");
            }
            else if (totalSavedMoney < giftPrice)
            {
                Console.WriteLine($"Insufficient money: {Math.Abs(giftPrice - totalSavedMoney):f2} BGN.");
            }
        }
    }
}