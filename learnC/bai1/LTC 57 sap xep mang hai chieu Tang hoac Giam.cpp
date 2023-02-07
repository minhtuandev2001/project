#include<stdio.h>
void Nhap(int x[100][100] , int &m , int &n){
	do{
		// m hang va n cot 
		printf(" nhap vao m , n ");
		scanf("%d%d" , &m , &n);
	}while(n< 0 || m<0);
	
	for(int i = 0 ; i< m ; i++){
		for(int j = 0 ; j<n ; j++){
			printf(" x[%d][%d] = " ,i ,j);
			scanf("%d",&x[i][j]);
		}
	}
}
void Xuat(int x[100][100] ,int m , int n){
	printf("\n Ma Tran :\n");
	for(int i = 0 ; i<m ; i++){
		for(int j = 0 ; j<n ; j++){
			printf(" %d\t", x[i][j]);
		}
		printf("\n");
	}
}
void sapXepTang(int x[100][100] , int m , int n ){
	int tam ;
	int k = m*n ;
	
	for(int i = 0 ; i< k-1 ; i++){
		for(int j = i+1 ; j < k ; j++){
			if(x[i/n][i%n]>x[j/n][j%n]){
				tam = x[i/n][i%n];
				x[i/n][i%n] =x[j/n][j%n];
				x[j/n][j%n] = tam ;
			}
		}
	}
}
void sapXepGiam(int x[100][100] , int m , int n ){
	int tam ;
	int k = m*n ;
	
	for(int i = 0 ; i< k-1 ; i++){
		for(int j = i+1 ; j < k ; j++){
			if(x[i/n][i%n]<x[j/n][j%n]){
				tam = x[i/n][i%n];
				x[i/n][i%n] =x[j/n][j%n];
				x[j/n][j%n] = tam ;
			}
		}
	}
}
int main(){
	int a[100][100] ;
	int m ,n ;
	
	Nhap(a,m,n);
	Xuat(a,m,n);
	
	printf("\n Tang\n");
	sapXepTang(a,m,n);
	Xuat(a,m,n);
	
	printf("\nGiam\n");
	sapXepGiam(a,m,n);
	Xuat(a,m,n);
}
