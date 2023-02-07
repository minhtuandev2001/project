#include<stdio.h>
int main(){
	// khai bao bien 
	// phuong trinh bac nhat ax + b= 0 ; 
	
	float a , b , x;
	
	// Nhap du lieu
	printf(" Nhap He so cua phuong trinh ax + b = 0");
	printf("\n a = ");
	scanf("%f",&a) ;
	printf("\n b = ");
	scanf("%f", &b);
	
	// xu ly 
	x = -b/a;
	
	// xuat du lieu ra man hinh 
	printf("\n %fx + %f = %f" , a , b , x); 
} 
