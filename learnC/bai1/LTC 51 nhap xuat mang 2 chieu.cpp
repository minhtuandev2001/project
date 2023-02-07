#include<stdio.h>	
void NhapMaTran( int x[100][100] , int &m , int &n){
	do{
		printf(" nhap vao m , n :");
		scanf("%d%d" , &m ,&n);
	}while(m <= 0 || n <= 0 );
	
	for(int i =0 ; i< m ; i++){
		for(int j = 0 ; j<n ; j++){
			printf("x[%d][%d] =" , i , j);
			scanf("%d",&x[i][j]);
		}
	}
}
void XuatMaTran(int x[100][100] , int m , int n){
	printf("\n Ma Tran : \n");
	for(int i = 0 ; i< m ; i++){
		for(int j = 0 ; j< n ; j++){
			printf(" %d\t", x[i][j]);
		}
		printf("\n");
	}
}
int main(){
	int a[100][100];
	int m ;
	int n;
	NhapMaTran(a,m,n);
	XuatMaTran(a,m,n);
}
