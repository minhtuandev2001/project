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
int TimMin_cuaDong(int x[100][100] , int m , int n , int dong ){
	int min = x[dong][0];
	for(int j = 0 ; j < m ; j++){
		if(min>x[dong][j]){
			min = x[dong][j];
		}
	}
	return min ;
}
int TimMax_cuaDong(int x[100][100] , int m , int n , int dong ){
	int max = x[dong][0];
	for(int j = 0 ; j < m ; j++){
		if(max<x[dong][j]){
			max = x[dong][j];
		}
	}
	return max ;
}
int TimMin_cot(int x[100][100] , int m , int n , int cot){
	int min = x[0][cot];
	for(int i = 0 ; i < n ; i++){
		if(min>x[i][cot]){
			min = x[i][cot];
		}
	}
	return min ;
}
int TimMax_cot(int x[100][100] , int m , int n , int cot){
	int max = x[0][cot];
	for(int i = 0 ; i < n ; i++){
		if(max<x[i][cot]){
			max = x[i][cot];
		}
	}
	return max ;
}
int main(){
	int a[100][100];
	int m , n;	
	
	Nhap(a,m,n);
	Xuat(a,m ,n);
	
	// nho mang bat dau tu vi tri 0;
	printf("Min cua hang 0 : %d \n" ,TimMin_cuaDong(a,m,n,0));
	printf("Max cua hang 0 : %d \n" ,TimMax_cuaDong(a,m,n,0));
	 
	printf("Min cua hang 1 : %d \n" ,TimMin_cuaDong(a,m,n,1));
	printf("Max cua hang 2 : %d \n" ,TimMax_cuaDong(a,m,n,2));
	
	printf("Min cua cot 1 : %d \n" ,TimMin_cot(a,m,n,1));
	printf("Max cua cot 2 : %d \n" ,TimMax_cot(a,m,n,2));
	
}
