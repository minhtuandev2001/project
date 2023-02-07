#include <stdio.h>
int main(){
	// khai bao bien 
	int a , b , min , max ;
	
	// nhap du lieu
	printf(" nhap vao a = ");
	scanf("%d",&a);
	 
	printf("\n nhap vao b = ");
	scanf("%d",&b);
	
	// Xu ly 
	min = (a<b)?a:b;
	max = (a>b)?a:b;
	
	// xuat du lieu  
	printf("\n min cua 2 so la %d", min) ;
	printf("\n max cua 2 so la %d ", max) ; 
} 
