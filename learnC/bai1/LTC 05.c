#include<stdio.h>

int main (){
	float a, b ;
	printf(" Nhap vao gia tri a = ");
	scanf("%f" ,&a);
	printf("\n Nhap vao gia tri b = ");
	scanf("%f", &b);
	
	float tong= a + b;
	float hieu = a-b ;
	float tich = a*b;
	float thuong = a/b;
	printf("\n %f + %f  = %f",a , b , tong);
	
	printf("\n %f - %f  = %f",a , b , hieu);
	
	printf("\n %f * %f  = %f",a , b , tich);
		
	printf("\n %f / %f  = %f",a , b , thuong);
	
	int r = (int) a % (int)b ;
	
	printf("\n %f chia lay du %f = %d" ,a ,b , r);
	a++;
	printf("\n a++ =%f ", a);
	
	b--;
	printf("\n b-- =%f ",b);
}
