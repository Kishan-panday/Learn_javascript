#include<stdio.h>
int main()
{
int n;
printf("\n enter choice ( 0.SUNDAY 1.MONDAY 2.TUESDAY 3.WEDNESDAY 4.THURSDAY 5.FRIDAY 6.SATERDAY)");
scanf("%d",&n);
switch(n)
{
case 0:
printf("SUNDAY");
break;
case 1:
printf("MONDAY");
break;
case 2:
printf("TUESDAY");
break;
case 3:
printf("WEDNESDAY");
break;
case 4:
printf("thursday");
break;
case 5:
printf("FRIDAY");
break;
case 6:
printf("saterday");
break;
default:
printf("wrong choice");
break;
return 0;
}
}