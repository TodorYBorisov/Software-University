using System;

namespace WorldSwimmingRecord
{
    internal class Program
    {
        static void Main(string[] args)
        { 
          
            double record = double.Parse(Console.ReadLine());
            double distance = double.Parse(Console.ReadLine());
            double timePerOneMeter = double.Parse(Console.ReadLine());

            double swimDistance = distance * timePerOneMeter;

            double addedTime = (Math.Floor(distance / 15 )) * 12.5;

            double totalTime = swimDistance + addedTime;

            double diffToRecord = totalTime -record; 

           if(totalTime < record)
            {
                Console.WriteLine($" Yes, he succeeded! The new world record is {totalTime:f2} seconds.");

            }
           else if (totalTime >= record)
            {
                Console.WriteLine($"No, he failed! He was {diffToRecord:f2} seconds slower.");
            }

        }
    }
}
