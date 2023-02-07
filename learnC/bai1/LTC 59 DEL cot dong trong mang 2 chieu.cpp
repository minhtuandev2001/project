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
void xoaDong(int x[100][100] , int &m , int n , int k ){
	if(k < 0 || k >m){
		return ;
	}
	for(int i = k ; i < m-1 ; i++ ){
		for(int j = 0  ;j < n ; j++){
			x[i][j] = x[i+1][j] ;
		}
	}
	m--;
}
void xoaCot(int x[100][100] , int m , int &n , int k ){
	printf("\n Xoa cot \n");
		for(int j = k ; j < n-1 ; j++){
			for(int i = 0 ; i < m  ; i++){
				x[i][j] = x[i+1][j];
		}
	}
	n--;
}
int main(){
	int a[100][100];
	int m ,n ;
	
	Nhap(a,m,n);
	Xuat(a,m,n);
	
	xoaDong(a,m,n,2);
	Xuat(a,m,n);
	
	xoaCot(a,m,n,2);
	Xuat(a,m,n);
}
