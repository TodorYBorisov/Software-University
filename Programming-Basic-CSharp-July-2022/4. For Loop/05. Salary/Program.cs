using System;

namespace _05._Salary
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberOpenTabs = int.Parse(Console.ReadLine());

            int salary = int.Parse(Console.ReadLine());

            for (int i = 1; i <= numberOpenTabs; i++)
            {
                string siteName = Console.ReadLine();

                if (siteName == "Facebook")
                {
                    salary -= 150;

                }
                else if (siteName == "Instagram")
                {
                    salary -= 100;

                }
                else if (siteName == "Reddit")
                {
                    salary -= 50;
                }

            }
            if (salary <= 0)
            {
                Console.WriteLine("You have lost your salary.");
            }
            else if (salary > 0)
            {
                Console.WriteLine(salary);
            }
        }
    }
}

