using System;

namespace OnTimeForTheExam
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int examHour = int.Parse(Console.ReadLine());
            int examMinutes = int.Parse(Console.ReadLine());
            int arriveHour = int.Parse(Console.ReadLine());
            int arriveMinutes = int.Parse(Console.ReadLine());



            int examSumInMimutes = examHour * 60 + examMinutes;
            int arriveSumInMinutes = arriveHour * 60 + arriveMinutes;

            if (arriveSumInMinutes > examSumInMimutes)
            {
                Console.WriteLine("Late");

                if (arriveSumInMinutes - examSumInMimutes < 60)
                {
                    Console.WriteLine($"{arriveSumInMinutes - examSumInMimutes} minutes after the start");
                }
                else
                {
                    int hours = (arriveSumInMinutes - examSumInMimutes) / 60;
                    int mins = (arriveSumInMinutes - examSumInMimutes) % 60;
                    Console.WriteLine($"{hours}:{mins:D2} hours after the start");
                }
            }
            else if (arriveSumInMinutes == examSumInMimutes || examSumInMimutes - arriveSumInMinutes <= 30)
            {
                Console.WriteLine("On time");

                if (arriveSumInMinutes - examSumInMimutes != 0)
                {
                    Console.WriteLine($"{examSumInMimutes - arriveSumInMinutes} minutes before the start");
                }

            }
            else if (examSumInMimutes - arriveSumInMinutes > 30)
            {
                Console.WriteLine("Early");

                if (Math.Abs(arriveSumInMinutes - examSumInMimutes) < 60)
                {
                    Console.WriteLine($"{examSumInMimutes - arriveSumInMinutes} minutes before the start");
                }
                else
                {
                    int hour = (examSumInMimutes - arriveSumInMinutes) / 60;
                    int mins = (examSumInMimutes - arriveSumInMinutes) % 60;
                    Console.WriteLine($"{hour}:{mins:D2} hours before the start");
                }
            }
        }
    }
}
