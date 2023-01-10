
using System;

namespace ExcellentResult
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // const double EXELLENT_GRADE = 5.5;  
            //това е константа на горния ред, ползвасе с цел да не се преправя по надолу в кода ако я има налична
            // double grade = double.Parse(Console.ReadLine());
            //bool isExellentGrade = grade >= EXELLENT_GRADE;
            //if (isExellentGrade)
            //{
            //Console.WriteLine("Excellent!");
           //}

            double grade = double.Parse(Console.ReadLine());
            if (grade >= 5.5)

            {
                Console.WriteLine("Excellent!");
            }
        }
    }
}