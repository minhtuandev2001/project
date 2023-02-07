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
void themvaoCuoiMang(int x[] , int &n , int m ){
	int size = sizeof(x)/sizeof(x[0]);
	if(n==size){
		printf("khong the them vao mang !");
	}
	
	// phan tu can them vao 
//	int m;
//	do{
//		printf("\n nhap phan tu muon them vao ");
//		scanf("%d",&m);
//		
//	}while(m< 1);
	
	x[n] = m ;
	n++;
	// 1 2 3 4 5  => n = 5 
	// x[5] = m 
	// n++;
}
void themvaoDauMang(int x[] , int &n , int m  ){
	int size = sizeof(x)/sizeof(x[0]);
	if(n==size){
		printf("khong the them vao mang !");
	}
//	// phan tu can them vao 
//	int m;
//	do{
//		printf("\n nhap phan tu muon them vao ");
//		scanf("%d",&m);
//		
//	}while(m< 1);
//	
	
	n++;
	for(int i =n-1 ; i > 0 ; i--){
		x[i]= x[i-1];
		
	}
	x[0]=m ;
}
void themVaoViTri_k(int x[] , int &n , int m , int k){
	int size = sizeof(x)/sizeof(x[0]);
	if(n==size){
		printf(" khong the them vao mang !");
	}
	
//	// phan tu can them vao 
//	int m;
//	do{
//		printf("\n nhap phan tu muon them vao ");
//		scanf("%d",&m);
//		
//	}while(m< 1);
//	
//	// vi tri de them phan tu 
//	int k ;
//		printf("\n nhap vi tri muon them vao ");
//		scanf("%d",&k);
	
	n++;
	for(int i = n-1 ; i > k ; i--){
		x[i]= x[i-1];
	} 
	x[k]=m;
}
int main(){
	int a[100];
	int n ;
	nhapMang(a,n);
	xuat(a,n);
	themvaoCuoiMang(a,n,55);
	printf("\n");
	xuat(a,n);
	themvaoDauMang(a, n,44);
	printf("\n");
	xuat(a,n);
	themVaoViTri_k(a,n,99,3);
	printf("\n");
	xuat(a,n);
}
