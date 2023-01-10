using System;

namespace _08._Graduation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //четем името на студента
            string name = Console.ReadLine();

            //четем оцеката на студента
            double rating = double.Parse(Console.ReadLine());

            //запазваме сбора от всички оценки
            double totalRating = 0;

            //запазваме средната оценка
            double avgRating = 0;

            //вземаме текущият клас(това ще е стъпката на while loop)
            int grade = 1;

            // правим си брояч за провалите
            int fails = 0;


            while (grade <= 12)
            {
                if (rating < 4.0)
                {
                    fails++;
                }

                if (fails == 2)
                {
                    grade--;
                    Console.WriteLine($"{name} has been excluded at {grade} grade");
                    break;
                }
                //добавяме оценката към общите ако не са го скъсали
                totalRating += rating;
                //изчисляваме средната оценка
                avgRating = totalRating / grade;

                //след което увеличаваме класа
                grade++;

                if (grade > 12)
                {
                    Console.WriteLine($"{name} graduated. Average grade: {avgRating:f2}");
                    break;
                }
                rating = double.Parse(Console.ReadLine());
            }
        }
    }
}
