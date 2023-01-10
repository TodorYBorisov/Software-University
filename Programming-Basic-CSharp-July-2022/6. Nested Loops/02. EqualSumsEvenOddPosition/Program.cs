using System;

namespace _02._EqualSumsEvenOddPosition
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int startNumber = int.Parse(Console.ReadLine());
            int finalNumber = int.Parse(Console.ReadLine());

            for (int i = startNumber; i <= finalNumber; i++)
            {
                string number = i.ToString();

                int evenSum = 0;
                int oddSum = 0;

                //тук сме взели дължината на числото 

                for (int j = 0; j < number.Length; j++)
                {
                    int currentDigit = int.Parse(number[j].ToString());

                    if (j % 2 == 0)
                    {
                        oddSum += currentDigit;
                    }
                    else
                    {
                        evenSum += currentDigit;
                    }
                }

                if(evenSum == oddSum)
                {
                    Console.Write($"{i} ");
                }
            }
        }
    }
}
