#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int size = 5;
    int num = 0;
    int highest_number = 0;
    int lowest_number = 20;
    printf("Generating a random number between 1-20\n");

    srand(time(NULL));

    int arr[size];
    for (int i = 0; i < size; i++)
    {
        arr[i] = num;
        num = (rand() % 20) + 1;
    }

    for (int i = 0; i < size; i++)
    {
        if (arr[i] > highest_number)
        {
            highest_number = arr[i];
        }
    }
    for (int i = 0; i < size; i++)
    {
        if (arr[i] < lowest_number)
        {
            lowest_number = arr[i];
        }
    }
        for (int i = 0; i < size; i++)
    {
        printf("%i\n", arr[i]);
    }
    printf("%d\n", highest_number);
    printf("%d\n", lowest_number);
    return 0;
}