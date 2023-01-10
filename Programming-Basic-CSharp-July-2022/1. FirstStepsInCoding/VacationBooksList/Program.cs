using System;

namespace VacationBooksList
{
    internal class Program
    {
        static void Main()
        {
            int numOfPages = int.Parse(Console.ReadLine());
            int pagesPerHour = int.Parse(Console.ReadLine());
            int NumOfDays = int.Parse(Console.ReadLine());

            int hoursPerDay = (numOfPages / pagesPerHour) / NumOfDays;
            Console.WriteLine(hoursPerDay);
        }
    }
}
