using System;

namespace LunchBreak
{
    internal class Program
    {
        static void Main()
        {
            string seriesName = Console.ReadLine();
            int episodeLength = int.Parse(Console.ReadLine());
            int lengthBreak = int.Parse(Console.ReadLine());

            double timeForLunch = lengthBreak * 0.125;
            double timeForRelax = lengthBreak * 0.25;

            double totalTime = timeForLunch + timeForRelax + episodeLength;

            if( totalTime <= lengthBreak )
            {
                double leftMinutes = lengthBreak - totalTime;

                Console.WriteLine($"You have enough time to watch {seriesName} and left with {Math.Ceiling(leftMinutes)} minutes free time.");
            }
            else if (totalTime > lengthBreak) {

                double needMinutes = totalTime - lengthBreak;

                Console.WriteLine($"You don't have enough time to watch {seriesName}, you need {Math.Ceiling(needMinutes)} more minutes.");
            }
        }
    }
}
