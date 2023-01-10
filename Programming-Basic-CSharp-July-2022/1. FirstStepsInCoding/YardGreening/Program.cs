using System;

namespace YardGreening
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double oneSqm = 7.61;
            double sqm = double.Parse(Console.ReadLine());
            double totalPrice = sqm * oneSqm;
            double discount = totalPrice * 0.18;
            double finalPrice = totalPrice * 0.82;

            Console.WriteLine("The final price is " + finalPrice + " lv.");
            Console.WriteLine("The discount is: " + discount + " lv.");
        }
    }
}
