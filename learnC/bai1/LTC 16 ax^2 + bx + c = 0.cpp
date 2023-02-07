#include<stdio.h>
#include<math.h>
	int main(){
		// khai bao bien
		float a , b, c , x1 , x2 ;
		// nhap cac he so phuong trinh 
		printf(" nhap a ");
		scanf("%f",&a);
		
		printf("\n nhap b ");
		scanf("%f",&b);
		
		printf("\n nhap c ");
		scanf("%f",&c);
		
		float delta = b*b - 4*a*c;
		if(a!=0){
			if(delta < 0 ){
				printf(" phuong trinh vo nghiem ");
			}
			if(delta == 0){
				printf(" phuong trinh co nghiem kep x1 = %f , x2 = %d ", -b/2*a , -b/2*a);
			}
			if(delta > 0 ){
				printf(" phuong trinh bac hai co hai nghiem phan biet ");
				
				x1 = (-b+sqrt(delta))/(2*a);
				x2 = (-b-sqrt(delta))/(2*a);
				printf(" x1 = %f" ,x1);
				printf(" x2 = %f" , x2);
			}
		}else{
			printf("day la phuong trinh bac mot");
		}
	}

