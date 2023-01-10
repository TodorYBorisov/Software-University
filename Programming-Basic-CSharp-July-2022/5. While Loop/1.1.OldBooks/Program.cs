using System;

namespace _1._1.OldBooks
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string favoriteBook = Console.ReadLine();

            int count = 0;

            while (true)
            {
                string nextBook = Console.ReadLine();

                if (nextBook == favoriteBook)
                {
                    Console.WriteLine($"You checked {count} books and found it.");
                    break;
                }
                else if (nextBook == "No More Books")
                {
                    Console.WriteLine($"The book you search is not here!");
                    Console.WriteLine($"You checked {count} books.");
                    break;
                }
                count++;
            }
        }
    }
}
