using System;

namespace _02._ExamPreparation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int badGrades = int.Parse(Console.ReadLine());

            double sumGrades = 0;
            int counter = 0;
            string lastProblem = "";
            int badGradesCounter = 0;

            string nameOfProblem = Console.ReadLine();

            while (nameOfProblem != "Enough")
            {
                int grade = int.Parse(Console.ReadLine());

                lastProblem = nameOfProblem;

                if (grade <= 4)
                {
                    badGradesCounter++;

                    if (badGradesCounter == badGrades)
                    {
                        Console.WriteLine($"You need a break, {badGradesCounter} poor grades.");
                        break;
                    }
                }
                sumGrades += grade;
                counter++;

                nameOfProblem = Console.ReadLine();
            }

            double aveScore = sumGrades / counter;

            if (badGradesCounter < badGrades)
            {
                Console.WriteLine($"Average score: {aveScore:F2}");
                Console.WriteLine($"Number of problems: {counter}");
                Console.WriteLine($"Last problem: {lastProblem}");
            }
        }
    }
}
