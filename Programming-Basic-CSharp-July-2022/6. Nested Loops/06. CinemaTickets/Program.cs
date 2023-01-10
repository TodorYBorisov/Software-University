using System;

namespace _06._CinemaTickets
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string nameOfmovie = Console.ReadLine();

            int studentCounter = 0;
            int standertCounter = 0;
            int kidCounter = 0;

            while (nameOfmovie != "Finish")
            {
                int freePlaces = int.Parse(Console.ReadLine());

                int counterTickets = 0;

                while (freePlaces > counterTickets)
                {
                    string typeOfTicket = Console.ReadLine();

                    if (typeOfTicket == "End")
                    {
                        break;
                    }

                    if (typeOfTicket == "student")
                    {
                        studentCounter++;
                    }
                    else if (typeOfTicket == "standard")
                    {
                        standertCounter++;
                    }
                    else if (typeOfTicket == "kid")
                    {
                        kidCounter++;
                    }

                    counterTickets++;
                }
                double avgPlaces = (counterTickets * 1.0 / freePlaces) * 100.0;

                Console.WriteLine($"{nameOfmovie} - {avgPlaces:f2}% full.");

                nameOfmovie = Console.ReadLine();
            }

            int allTickets = studentCounter + standertCounter + kidCounter;

            Console.WriteLine($"Total tickets: {allTickets}");
            Console.WriteLine($"{studentCounter * 100.0 / allTickets:f2}% student tickets.");
            Console.WriteLine($"{standertCounter * 100.0 / allTickets:f2}% standard tickets.");
            Console.WriteLine($"{kidCounter * 100.0 / allTickets:f2}% kids tickets.");
        }
    }
}
