#include<stdio.h>
void nhapMang(int x[100] , int &n){
	do{
	printf(" nhap so luong phan tu trong mang ");
	scanf("%d",&n);
		
	}while(n< 1 || n > 100);
	
	int i ;
	for( i = 0 ; i < n ; i++){
		printf(" x[%d] = ", i);
		scanf("%d" ,&x[i]);
	}
}
void xuat(int x[] , int n){
	int i ;
	for( i = 0 ; i < n ; i++){
		printf(" %d " , x[i]);
	}
}
void xoaMangTaiVitri(int x[] , int &n , int vitri_del){
	// 1 2 3 4 5
	// 1 2 4 5
	for(int i = vitri_del ; i < n-1 ; i++){
		x[i] = x[i+1];
	}
	n--;
}
void xoaMangTheoGiatri(int x[] , int &n ){
	int gt;
	printf("\n nhap vao gia tri can xoa : ");
	scanf("%d",&gt);
	for(int i = 0 ; i< n ; i++){
		if(x[i]==gt)
			xoaMangTaiVitri(x,n,i);
	}
}
int main(){
	int a[100];
	int n ;
	nhapMang(a,n);
	xuat(a,n);
	xoaMangTheoGiatri(a,n);
	printf("\n");
	xuat(a,n);
} 
