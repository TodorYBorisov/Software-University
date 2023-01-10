using System;

namespace _06._Cake
{
    internal class Program
    {
        static void Main(string[] args)
        {

            int widthCake = int.Parse(Console.ReadLine());
            int lengthCake = int.Parse(Console.ReadLine());

            int totalNumOfPieces = widthCake * lengthCake;

            while (totalNumOfPieces > 0)
            {
                string input = Console.ReadLine();


                if (input == "STOP")
                {
                    break;
                }
                //правим "inputa" в нова променлива!
                int currentPieces = int.Parse(input);

                totalNumOfPieces -= currentPieces;

            }

            if (totalNumOfPieces >= 0)
            {

                Console.WriteLine($"{totalNumOfPieces} pieces are left.");
            }
            else
            {
                Console.WriteLine($"No more cake left! You need {Math.Abs(totalNumOfPieces)} pieces more.");
            }
        }
    }
}
