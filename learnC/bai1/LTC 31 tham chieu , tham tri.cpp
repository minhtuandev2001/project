#include<stdio.h>
// tham chieu dung duoi file .cpp
void truyen_thamtri(int x , int  y ){
	int tam = x ;
	x = y;
	y = tam ;
}
void truyen_thamchieu(int &x ,int &y){
	int tam = x ;
	x = y;
	y = tam ;
}
int main(){
	int a, b ;
	
	printf(" nhap a , b \n" );
	scanf("%d%d" , &a , &b );
	printf("\n gia tri vua nhap a = %d , b = %d " , a , b);
	
	// tham tri 
	truyen_thamtri(a,b);
	printf("\n hoan doi - dung tham tri a = %d , b = %d ", a , b );
	
	// tham chieu 
	truyen_thamchieu(a,b);
	printf(" \n hoan doi _  dung tham chieu a = %d , b = %d ",a,b);
}
