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
int timMax(int x[100][100] , int m , int n){
	int max = x[0][0];
	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j< n ; j++){
			if(max<x[i][j]){
				max = x[i][j];
			}
		}
	}
	return max;
}
int timMin(int x[100][100] , int m , int n){
	int min = x[0][0];
	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j < n ; j++){
			if(min > x[i][j]){
				min = x[i][j];
			}
		}
	}
	return min;
}
int main(){
	int a[100][100];
	int m, n ;
	Nhap(a,m,n);
	Xuat(a,m,n);
	
	printf(" Max trong mang 2 chieu la %d ", timMax(a,m,n));
	printf("\n Min trong mang 2 chieu la %d " , timMin(a,m,n));
}
