﻿using System;

namespace _07._SumNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberRows = int.Parse(Console.ReadLine());

            int sum = 0;

            for (int i = 1; i <= numberRows; i++)
            {

                int currentNumber = int.Parse(Console.ReadLine());

                
                sum += currentNumber;
            }
            Console.WriteLine(sum);
        }    
    }
}
