#include <stdio.h>
int main (){
	int a, b ;
	printf(" nhap a = ");
	scanf("%d",&a);
	
	printf("\n nhap b = ");
	scanf("%d",&b);
	
	printf("\n %d == %d  la %d" ,a,b, a==b);
	
	printf("\n %d != %d  la %d ",a,b, a != b);
	
	printf("\n %d >= %d  la %d",a,b, a >= b);
	
	printf("\n %d <= %d  la %d",a,b,  a<= b);
} 
