#include<stdio.h>
void Nhap(int x[100][100] , int &m , int &n){
	do{
		// m hang va n cot 
		printf(" nhap vao m , n ");
		scanf("%d%d" , &m , &n);
	}while(n< 0 || m<0);
	
	for(int i = 0 ; i< m ; i++){
		for(int j = 0 ; j<n ; j++){
			printf(" x[%d][%d] = " , i ,j);
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
int timkiem(int x[100][100] , int m , int n , int gia_tri_tim ){
	int kq = 0 ;
	for(int i = 0 ;i < m ; i++){
		for(int j = 0 ; j< n ; j++){
			if(x[i][j]==gia_tri_tim)
			kq = 1;
		}
	}
	return kq;
} 
void thucHienTimKien(int x[100][100] , int m , int n){
	int chon;
	do{
		int giatricantim;
		printf("\n nhap vao gia tri tim kiem :");
		scanf("%d",&giatricantim);
		int kq =timkiem(x,m,n,giatricantim);
		
		if(kq){
			printf(" \ntim thay");
		}else{
			printf(" khong tim thay");
		}
		printf("\n nhap vao so bat ki de tiep tuc , nhap o de ket thu");
		scanf("%d",&chon);
	}while(chon!=0);
}
int main(){
	int a[100][100];
	int m ;
	int  n ;	
	Nhap(a,m,n);
	Xuat(a,m,n);
	thucHienTimKien(a,m,n);

}
