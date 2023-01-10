﻿using System;

namespace _01._NumberPyramid
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());

            int currentNumber = 1;

            bool isBigger = false;

            for (int row = 1; row <= number; row++)
            {
                for (int col = 1; col <= row; col++)
                {
                    if (currentNumber > number)
                    {
                        isBigger = true;
                        break;
                    }
                    Console.Write($"{currentNumber} ");
                    currentNumber++;
                }

                if (isBigger)
                {
                    break;
                }
                Console.WriteLine();
            }
        }
    }
}
