using System;

namespace _04._ComputerFirm
{
    internal class Program
    {
        static void Main(string[] args)
        {

            int numComputersModels = int.Parse(Console.ReadLine());

            double sales = 0;
            double rating = 0;
            int ratingCount = 0;

            for (int i = 1; i <= numComputersModels; i++)
            {
                int possibleSalesAndRating = int.Parse(Console.ReadLine());

                int possibleRating = possibleSalesAndRating % 10;

                double possibleSales = possibleSalesAndRating / 10;
                
                
                if(possibleRating == 2)
                {
                    sales += possibleSales * 0;
                    ratingCount++;
                    rating += possibleRating;
                }
                else if( possibleRating == 3)
                {
                    sales += possibleSales * 0.5;
                    ratingCount++;
                    rating += possibleRating;
                }
                else if( possibleRating == 4)
                {
                    sales += possibleSales * 0.7;
                    ratingCount++;
                    rating += possibleRating;
                }
                else if(possibleRating ==5)
                {
                    sales += possibleSales * 0.85;
                    ratingCount++;
                    rating += possibleRating;
                }
                else if (possibleRating == 6)
                {
                    sales += possibleSales * 1;
                    ratingCount++;
                    rating += possibleRating;
                }   
            }
            Console.WriteLine($"{sales:f2}");
            Console.WriteLine($"{(rating/ratingCount):f2}");
        }
    }
}
