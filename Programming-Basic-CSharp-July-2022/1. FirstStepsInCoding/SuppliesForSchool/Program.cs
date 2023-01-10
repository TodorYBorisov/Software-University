using System;

namespace SuppliesForSchool
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double pens = 5.8;
            double marker = 7.2;
            double cleaningAgent = 1.2;

            int numPacksOfPens = int.Parse(Console.ReadLine());
            int numPacksOfMarker = int.Parse(Console.ReadLine());
            int cleaningAgentLiters = int.Parse(Console.ReadLine());
            double percent = double.Parse(Console.ReadLine());

            double sumPrice = (numPacksOfPens * pens) + (numPacksOfMarker * marker) + (cleaningAgentLiters * cleaningAgent);

            //double discount = sumPrice * percent / 100;
            //double finalPrice = sumPrice - discount;
            double finalPrice = sumPrice - (sumPrice * percent / 100);

            Console.WriteLine(finalPrice);
        }
    }
}
