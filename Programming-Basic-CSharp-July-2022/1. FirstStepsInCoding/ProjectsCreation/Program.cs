using System;

namespace ProjectsCreation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int projectNumbers = int.Parse(Console.ReadLine());
            int hoursNeeded = 3;
            int totalHours = projectNumbers * hoursNeeded;
            Console.WriteLine($"The architect {name} will need {totalHours} hours to complete {projectNumbers} project/s.");
        }
    }
}
