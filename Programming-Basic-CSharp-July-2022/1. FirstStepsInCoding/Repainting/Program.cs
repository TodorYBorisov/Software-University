using System;

namespace Repainting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double SafetyNylon = 1.5;
            double paint = 14.5;
            double PaintThinner = 5;
            double bags = 0.4;

            int nylon = int.Parse(Console.ReadLine());
            int paintLiters = int.Parse(Console.ReadLine());
            int paintThinnerLiters = int.Parse(Console.ReadLine());
            int workmen = int.Parse(Console.ReadLine());

            double sumNylon = (nylon + 2) * SafetyNylon;
            double sumPaint = (paintLiters * 1.1) * paint;
            double sumThinner = paintThinnerLiters * PaintThinner;

            double totalSum = sumNylon + sumPaint + sumThinner + bags;
            double sumWorkmen = (totalSum * 0.3) * workmen;

            Console.WriteLine(totalSum + sumWorkmen);
        }
    }
}
