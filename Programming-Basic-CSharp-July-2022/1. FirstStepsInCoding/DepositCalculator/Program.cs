using System;

namespace DepositCalculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double amountDeposited = double.Parse(Console.ReadLine());
            int termsOfTheDeposit = int.Parse(Console.ReadLine());
            double annualInterestRate = double.Parse(Console.ReadLine());

            double accruedInterest = amountDeposited * annualInterestRate/100;
            double interestPermonth = accruedInterest / 12;
            double finalAmount = amountDeposited + (termsOfTheDeposit * interestPermonth);
            Console.WriteLine(finalAmount);
        }
    }
}
