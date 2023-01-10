using System;

namespace SumSeconds
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int fisrtTime = int.Parse(Console.ReadLine());
            int secondTime = int.Parse(Console.ReadLine());
            int tirdTime = int.Parse(Console.ReadLine());

            int totalTime = fisrtTime + secondTime + tirdTime;
            int minutes = totalTime / 60;
            int seconds = totalTime % 60;

            if (seconds < 10)
            {
                Console.WriteLine(minutes + ":0" + seconds);
            }
            else
            {
                Console.WriteLine(minutes + ":" + seconds);
            }
        }
    }
}
