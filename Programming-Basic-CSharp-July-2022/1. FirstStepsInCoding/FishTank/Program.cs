using System;

namespace FishTank
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int length = int.Parse(Console.ReadLine());
            int width = int.Parse(Console.ReadLine());
            int height = int.Parse(Console.ReadLine());
            double percent = double.Parse(Console.ReadLine());
            // обем формула паралепипед V=a*b*c
            //1 литър = 1 кубичен дециметър [dm³] = 1 000 кубичен сантиметър [cm³]
            double volumeTank = length * width * height * 0.001;
            //double volumeTank = length * width * height * 1000.00;
            double neededWater = volumeTank - (volumeTank * percent / 100);
            Console.WriteLine(neededWater);

            //Тук закръгляме резултата до конкретно число слeд запетайката 2 или 3 знака!
            //Console.WriteLine("{0:f2}", neededWater);
            //Console.WriteLine($"{neededWater:f3}");
        }
    }
}