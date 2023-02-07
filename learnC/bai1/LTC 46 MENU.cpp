#include<stdio.h>
#include<conio.h>
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
	printf("\n");
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
	char gt ;
	
	do{
		printf("\t \t MENU \n");
		printf("1 - nhap mang \n");
		printf("2 - xuat mang \n");
		printf("3 - them phan tu vao cuoi mang \n");
		printf("4 - them phan tu vao dau mang \n")	;
		printf("5 - them vao vi tri k \n");
		printf("nhap x de thoat \n");
		printf(" lua chon \n");
		scanf(" %c",&gt);
		if(gt=='1'){
			nhapMang(a,n);
		}else if (gt=='2'){
			xuat(a,n);
		}else if(gt=='3' || gt=='4' || gt=='5'){
			int m;
			printf("\nnhap vao m = ");
			scanf("%d",&m);
		
			
			if(gt=='3'){
				themvaoCuoiMang(a,n,m);
			}else if(gt=='4'){
				themvaoDauMang(a,n,m);
			}else if(gt=='5'){
				int k ; 
				printf("\nbhap vao k = ");
				scanf("%d",&k);
				themVaoViTri_k(a,n,m,k);
			}else if(gt=='6'){
			}
		}
	}while(gt!='x');
}
