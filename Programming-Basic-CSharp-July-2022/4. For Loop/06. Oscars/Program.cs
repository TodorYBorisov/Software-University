using System;

namespace _06._Oscars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string actorName = Console.ReadLine();

            double pointsFromAcademy = double.Parse(Console.ReadLine());

            int numOfAssesors = int.Parse(Console.ReadLine());

            double finalPoints = pointsFromAcademy;
            double pointsReceived = 0;

            for (int i = 1; i <= numOfAssesors; i++)
            {

                string nameOfAssesor = Console.ReadLine();
                double pointFromAsseros = double.Parse(Console.ReadLine());

                int length = nameOfAssesor.Length;
                pointsReceived = (length * pointFromAsseros) / 2.0;

                finalPoints += pointsReceived;

               if( finalPoints >= 1250.50)
                break;                          
            }
            if (finalPoints >= 1250.50)
            {
                Console.WriteLine($"Congratulations, {actorName} got a nominee for leading role with {finalPoints:f1}!");
            }
            else if (finalPoints < 1250.50)
            {
                Console.WriteLine($"Sorry, {actorName} you need {1250.50 - finalPoints:f1} more!");
            }
        }
    }
}
