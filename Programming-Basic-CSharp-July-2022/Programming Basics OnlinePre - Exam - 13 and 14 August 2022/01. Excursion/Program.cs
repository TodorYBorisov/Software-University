using System;

namespace _01._Excursion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numPeopleInGroup = int.Parse(Console.ReadLine());

            int numNights = int.Parse(Console.ReadLine());

            int numTransportCard = int.Parse(Console.ReadLine());

            int numTicketsMuseum = int.Parse(Console.ReadLine());

            double night = 20.0;
            double transportCard = 1.60;
            double ticketMuseum = 6.0;


            double totalSumPerPerson = (numNights * night) + (numTransportCard * transportCard) + (numTicketsMuseum * ticketMuseum);

            double finalSum = totalSumPerPerson * numPeopleInGroup *1.25;

            Console.WriteLine($"{finalSum:f2}");

        }
    }
}
