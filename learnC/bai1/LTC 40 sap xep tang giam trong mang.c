#include<stdio.h>
void sapxepTang(int x[] , int n ){
	int i ,tam ;
	int j ;
	for( i = 0 ; i< n-1 ; i++){
		for( j = i+1 ; j< n ; j++){
			if(x[i]>x[j]){
				tam = x[j];
				x[j]=x[i];
				x[i] = tam;
			}
		}
	}
	
}
void sapxepGiam(int x[] , int n ){
	int i ,tam ;
	int j ;
	for( i = 0 ; i< n-1 ; i++){
		for( j = i+1 ; j< n ; j++){
			if(x[i]<x[j]){
				tam = x[j];
				x[j]=x[i];
				x[i] = tam;
			}
		}
	}
	
}
void print(int x[] , int n){
	int i ;
	for( i = 0 ; i < n ; i++){
		printf(" %d", x[i]);	
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
	
	// goi ham xu ly 
	printf("\n mang tang dan :");
	sapxepTang(a,n);
	print(a, n);
	
	printf("\n mang giam dan :");
	sapxepGiam(a, n);
	print(a,n);
}
