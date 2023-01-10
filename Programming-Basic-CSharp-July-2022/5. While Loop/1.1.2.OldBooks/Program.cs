using System;

namespace _1._1._2.OldBooks
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string favoriteBook = Console.ReadLine();

            int counter = 0;

            string nextBook = Console.ReadLine();

            while (nextBook != favoriteBook)
            {
                if (nextBook == "No More Books")
                {
                    Console.WriteLine($"The book you search is not here!");
                    Console.WriteLine($"You checked {counter} books.");
                    break;
                }
                counter++;

                nextBook = Console.ReadLine();
            }
            if (nextBook == favoriteBook)
            {
                Console.WriteLine($"You checked {counter} books and found it.");
            }
        }
    }
}
