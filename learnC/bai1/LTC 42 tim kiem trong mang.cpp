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
int timkiem( int x[] , int n , int tk ){
	int kq = 0 ;
	int i ; 
	for( i = 0 ; i< n ; i++){
		if(x[i]==tk){
			kq = 1;
			return 1;
		}
	}
	return kq ;
}
void thuchientimkiem(int x[100] , int n){
	int tk;
	printf("\n Nhap vao gia tri can tim : ");
	scanf("%d" , &tk);
	int kq = timkiem(x,n,tk);
	if(kq==1){
		printf("\n tim thay ");
	}else{
		printf(" khong tim thay");
	}
}
int main(){
	int a[100];
	int n ;
	nhapMang(a,n);
	xuat(a,n);
	printf("\n");
	thuchientimkiem(a,n);
	
}
