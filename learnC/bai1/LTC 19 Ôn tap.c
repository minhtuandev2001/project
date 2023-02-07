#include<stdio.h>
#include<math.h>
int main (){
	// nhap toa do 3 diem , kiem tra co pha tam giac hay khong   
	// khai bao bien 
	float a , b, c;
	float x_a , y_a , x_b, y_b , x_c , y_c ;
	float chu_vi , dien_tich , p;
	
	
	// nhap du lieu 
	printf(" nhap toa do diem A \n");
	scanf("%f %f" , &x_a , &y_a);
	
	printf("\n nhap toa do diem B \n");
	scanf("%f %f" , &x_b , &y_b);
	
	printf("\n nhap toa do diem C \n");
	scanf("%f %f" , &x_c , &y_c);
	
	// a = do dai doan AB
	// b = do dai doan AC
	// c = do dai doan AC
	a = sqrt(pow((x_a-x_b),2) + pow((y_a - y_b),2));
	b = sqrt(pow((x_a-x_c),2) + pow((y_a - y_c),2));
	c = sqrt(pow((x_b-x_c),2) + pow((y_b - y_c),2));
	chu_vi = a+b+c;
	
	// xu ly 
	if(a + b > c && a + c > b && b + c > a){
		printf("\n ba canh tren la cua mot tam giac ");
		if(a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c ==a*a){
			printf("\n day la tam giac vuong");
				p = chu_vi/2;
				dien_tich = sqrt(p*(p-a)*(p-b)*(p-c));
				printf("\n dien tich = %f" , dien_tich); 
		}
		if(a==b && a==c && b==c){
			printf("\n tam giac deu ");
				p = chu_vi/2;
				dien_tich = sqrt(p*(p-a)*(p-b)*(p-c));
				printf("\n dien tich = %f" , dien_tich); 
		}
		if(a==b || a==c || b==c){
			printf("\n tam giac can ");
				p = chu_vi/2;
				dien_tich = sqrt(p*(p-a)*(p-b)*(p-c));
				printf("\n dien tich = %f" , dien_tich); 
		}
	}else
	{
		printf(" khong phai la mot tam giac");
	}
} 
