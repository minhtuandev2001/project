#include<stdio.h>
int main(){
	int a , b;
	printf(" nhap a ");
	scanf("%d",&a);
	
	printf("\n nhap b ");
	scanf("%d",&b);
	
	float  ket_qua = (float)a/b;
	int ket_qua2 = (int)ket_qua;
	 
	printf(" %d/%d = %.2f",a,b,ket_qua);
	printf("\n ket qua 2 : %d", ket_qua2) ;
}
