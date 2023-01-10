using System;

namespace _08._TennisRanklist
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberOfTournamets = int.Parse(Console.ReadLine());
            int startingPoints = int.Parse(Console.ReadLine());

            double sumPoint = startingPoints;

            int winTournaments = 0;

            for (int i = 1; i <= numberOfTournamets; i++)
            {
                string tournament = Console.ReadLine();

                if (tournament == "W")
                {
                    winTournaments += 1;

                    sumPoint += 2000;
                }
                else if (tournament == "F")
                {
                    sumPoint += 1200;
                }
                else if (tournament == "SF")
                {
                    sumPoint += 720;
                }
            }
            Console.WriteLine($"Final points: {sumPoint}");
            Console.WriteLine($"Average points: {Math.Floor((sumPoint - startingPoints) / numberOfTournamets)}");
            Console.WriteLine($"{(winTournaments * 1.0 / numberOfTournamets * 100):f2}%");
        }
    }
}
