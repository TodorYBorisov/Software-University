using System;

namespace _07._TrekkingMania
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberOfGroups = int.Parse(Console.ReadLine());

            int group1 = 0;
            int group2 = 0;
            int group3 = 0;
            int group4 = 0;
            int group5 = 0;

            for (int i = 1; i <= numberOfGroups; i++)
            {
                int numberOfPeopleInGroup = int.Parse(Console.ReadLine());

                if (numberOfPeopleInGroup <= 5)
                {
                    group1 += numberOfPeopleInGroup;
                }
                else if (numberOfPeopleInGroup >= 6 && numberOfPeopleInGroup <= 12)
                {
                    group2 += numberOfPeopleInGroup;
                }
                else if (numberOfPeopleInGroup >= 13 && numberOfPeopleInGroup <= 25)
                {
                    group3 += numberOfPeopleInGroup;
                }
                else if (numberOfPeopleInGroup >= 26 && numberOfPeopleInGroup <= 40)
                {
                    group4 += numberOfPeopleInGroup;
                }
                else if (numberOfPeopleInGroup >= 41)
                {
                    group5 += numberOfPeopleInGroup;
                }

            }
            int totalPeople = group1 + group2 + group3 + group4 + group5;

            double p1 = group1 * 1.0 / totalPeople * 100;
            double p2 = group2 * 1.0 / totalPeople * 100;
            double p3 = group3 * 1.0 / totalPeople * 100;
            double p4 = group4 * 1.0 / totalPeople * 100;
            double p5 = group5 * 1.0 / totalPeople * 100;

            Console.WriteLine($"{p1:f2}%");
            Console.WriteLine($"{p2:f2}%");
            Console.WriteLine($"{p3:f2}%");
            Console.WriteLine($"{p4:f2}%");
            Console.WriteLine($"{p5:f2}%");
        }
    }
}
