using System;

namespace _06._Building
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int floors = int.Parse(Console.ReadLine());
            int rooms = int.Parse(Console.ReadLine());

            for (int currenFloor = floors; currenFloor >=1; currenFloor--)
            {
                for (int currentRoom = 0; currentRoom < rooms; currentRoom++)
                {
                    if (currenFloor==floors)
                    {
                        Console.Write($"L{currenFloor}{currentRoom} "); 
                    }
                    else if( currenFloor % 2 == 0)
                    {
                        Console.Write($"O{currenFloor}{currentRoom} ");
                    }
                    else
                    {
                        Console.Write($"A{currenFloor}{currentRoom} ");
                    }
                }
                Console.WriteLine();
            }
        }
    }
}
