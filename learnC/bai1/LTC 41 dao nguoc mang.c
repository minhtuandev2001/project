#include<stdio.h>
void print( int x[] , int n){
	int i ; 
	for( i = 0 ; i< n ; i++){
		printf(" %d " , x[i]);
	}
}
void XuatnguocArray(int x[], int n){
	int i ; 
	for(i =n-1 ; i >= 0 ; i--){
		printf("%d " ,x[i]);
	}
}
void daonguocmang(int x[] , int n){
	int i , j ;
	for( i = 0 ; i < n/2 ; i++){
		int tam ; 
		tam = x[i];
		x[i] = x[n-i-1];
		x[n-i-1] = tam ;
	}
}
int main(){
	int a[100];
	int n ;
	
	do{
		printf(" nhap so luong phan tu trong mang ");
		scanf("%d",&n);
		
	}while(n< 1 || n > 100);
	
	int i ;
	for( i = 0 ; i < n ; i++){
		printf(" a[%d] = ", i);
		scanf("%d" ,&a[i]);
	}
	
	// goi ham 
	print(a, n);
	
	printf("\n mang duoc dao nguoc ");
	XuatnguocArray(a,n);
	
	printf("\n mang dao nguoc ");
	daonguocmang(a,n);
	print(a,n);
}
