using System;

namespace _04._SumOfTwoNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int startNumber = int.Parse(Console.ReadLine());
            int finalNumber = int.Parse(Console.ReadLine());
            int magicnumber = int.Parse(Console.ReadLine());

            int allCombinations = 0;

            bool isFound = false;

            for (int i = startNumber; i <= finalNumber; i++)
            {
                for (int j = startNumber; j <= finalNumber; j++)
                {
                    allCombinations++;

                    if (i + j == magicnumber)
                    {
                        isFound = true;

                        Console.WriteLine($"Combination N:{allCombinations} ({i} + {j} = {magicnumber})");
                        break;
                    }                  
                }
                if (isFound) //ако сложим тук отрицание "!" ще изпринти всички възможни комбинации
                {
                    break;
                }                       
            } 
            if (!isFound)
            {
                Console.WriteLine($"{allCombinations} combinations - neither equals {magicnumber}");
            }
        }
    }
}
