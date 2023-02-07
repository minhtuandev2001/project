#include<stdio.h>
void Nhap(int x[100][100] , int &m , int &n ){
	do{
		printf(" Nhap vao m , n");
		scanf("%d%d",&m , &n );
		
	}while(n<0 || m< 0 );
	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j < n ; j++){
			printf(" x[%d][%d] = " , i,j);
			scanf("%d",&x[i][j]);
		}
	}
}
void  Xuat(int  x[100][100] , int m , int n ){
	printf("\n Ma Tran : \n");
	for(int i = 0 ; i< m ; i++){
		for(int j = 0 ; j < n ; j++){
			printf(" %d\t",x[i][j]);
		}
		printf("\n");	
	}
}
void timMaTranChuyenVi(int x[100][100] , int m , int n ){
	int y[100][100];
	int k = m ; // hang 
	int l = n ; // cot 
	
	for(int i = 0;  i < l ; i++){
		for(int j = 0 ; j < k ; j++){
			y[i][j] = x[j][i];
		}
	}
	
	for(int i = 0;  i < l ; i++){
		for(int j = 0 ; j < k ; j++){
			printf("%d\t" , y[i][j]);
		}
			printf("\n");
	}
}
int main(){
	int a[100][100];
	int m , n ;
	
	Nhap(a,m,n);
	Xuat(a,m,n);
	
	printf("\n Ma Tran CHuyen Vi : \n");	
	timMaTranChuyenVi(a,m,n);
}
