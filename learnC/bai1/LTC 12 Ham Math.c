#include<stdio.h>
#include<math.h>

	int main (){
		int a  ;
		int b ;
		printf(" nhap a ");
		scanf("%d",&a);
		printf("\n nhap b ");
		scanf("%d", &b);
		float ket_qua = (float)a/b;
		
		printf("\n floor(a/b) = %f" ,floor(ket_qua) ); //Hàm này tra ve so nguyen lon nhat nho hon ket_qua

		printf("\n cell(a/b) =%f ", ceil(ket_qua));	   //Ham nay tra ve so nguyen nho nhat lon hon ket qua
		
		printf("\n a mu b = %f",pow(a,b));			   //Ham nay la ham mu 

		printf("\n can bac 2 cua a = %f",sqrt(a));

		printf("\n can bac 2 cua b = %f", sqrt(b));

		printf("\n gia tri tuyet doi cua a = %d" , abs(a));	//Ham gia tri tuyet doi cua so nguyen
	
		printf("\n gia tri tuyet doi cho so thuc = %f " ,fabs(b)); 	//Ham gia tri tuyet doi cua so thuc 

}
