#include<stdio.h>
#include<stdlib.h>
int main(){
	int x ;
	float y;
	char c ;
	
	printf(" nhap ki tu ");
	scanf("%c",&c);
	
	printf(" nhap x ");
	scanf("%d",&x);
	
	printf(" nhap y ");
	scanf("%f",&y);
	
	printf(" du lieu dc nhap vao \n");
	printf("x = %d , y = %.3f , c = %c", x , y , c);
	
	
	// nhap nhieu du lieu cung mot hang 
	float x1 , x2 , x3 ;
	printf(" nhap vao gia tri cua x1 , x2 , x3 \n");
	scanf("%f%f%f",&x1 , &x2 , &x3);
	
	printf("\ndu lieu cua x1 = %.2f , x2 = %.2f , x3 = %.2f ",x1 , x2 , x3);
}
