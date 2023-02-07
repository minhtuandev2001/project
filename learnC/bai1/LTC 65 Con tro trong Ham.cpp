#include<stdio.h>
void swap_1(int a, int b){
	int tam = a ; 
	a= b ;
	b = tam ;
}
void swap_2(int &a, int &b){
	int tam = a ; 
	a= b ;
	b = tam ;
}

void swap_3(int *a, int *b){
	int tam = *a ; 
	*a= *b ;
	*b = tam ;
}
int main(){
	int a = 5 ;
	int b = 10 ;
	printf("\n Truoc khi swap : a = %d , b= %d", a,b);
	
		// ham swap 1 dang  dung truyen tham tri nen khong doi
	swap_1(a,b);
	printf("\n  swap 1: a = %d , b= %d", a,b);
	
		// ham swap 2 truyen tham chieu nen gia tri bi doi  
	swap_2(a,b);
	printf("\n  swap 2: a = %d , b= %d", a,b);
	
		// su dung con tro 
	swap_3(&a,&b);  // vi khi tao ham truyen con tro , nen phai dua dia chi vao 
	printf("\n  swap 3: a = %d , b= %d", a,b);
	
}
