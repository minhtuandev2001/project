#include<stdio.h>
int main(){
	// khai bao bien 
	float a , b ;
	
	// nhap du lieu 
	printf("\n nhap cac he so phuong trinh ");
	
	printf("\n nhap a =");
	scanf("%f" , &a);
	
	printf("\n nhap b =");
	scanf("%f" , &b);
	
	if(a==0 && b != 0 ){
		printf("phuong trinh vo nghiem");
	}
	if(a !=0 && b==0){
		printf(" phuong trinh co nghiem x = 0");
	}
	if(a == 0 && b ==0){
		printf("phuong trinh co vo so nghiem");
	}else 
	if(a !=0 && b !=0){
		printf(" nghiem cua phuong trinh la %.2f" ,-b/a);
	}
}
