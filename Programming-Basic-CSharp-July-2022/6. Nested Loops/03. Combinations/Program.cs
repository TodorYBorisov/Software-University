using System;

namespace _03._Combinations
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int count = 0;

            for (int first = 0; first <= n; first++)
            {
                for (int second = 0; second <= n; second++)
                {
                    for (int third = 0; third <= n; third++)
                    {
                        if (first + second + third == n)
                        {
                            count++;                           
                        }                   
                    }
                }
            }

            Console.WriteLine(count);
        }
    }
}
