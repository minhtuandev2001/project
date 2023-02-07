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
void chuyenMangHaiChieuThanhMotChieu(int x[100][100] , int m , int n , int y[10000] , int &k){
	int index = 0 ; 
	// k o day la do dai mang 1 chieu == bien soluong duoi ham main;
	k = m*n ;
	for(int i = 0 ;i< m ; i++){
		for(int j = 0 ; j< n ; j++){
			y[index]= x[i][j];
			index++;
		}
	}
}
void xuat2(int x[] , int n){
	printf("\n mang mot chieu ");
	for(int i = 0 ;i< n ; i++){
		printf(" %d " , x[i]);
	}
}
int main(){
	int a[100][100]; 
	int m , n ;
	int b[10000];
	int soluong;
	
	Nhap(a,m,n);
	Xuat(a,m,n);
	
	chuyenMangHaiChieuThanhMotChieu(a,m,n,b,soluong);
	xuat2(b,soluong);
}
