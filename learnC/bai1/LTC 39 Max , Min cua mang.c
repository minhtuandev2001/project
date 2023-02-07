#include<stdio.h>
int timMin(int x[] , int n ){
	int min = x[0];
	int i ;
	for(i=0;i<n;i++){
		if(min>x[i])
			min = x[i];
	}
	
	return min;
}
int timMax(int x[] , int n ){
	int max = x[0];
	int i ;
	for(i=0;i<n;i++){
		if(max<x[i])
			max = x[i];
	}
	
	return max;
}
int main(){
	int a[100];
	int n ;
	
	do{
		printf(" nhap so luong phan tu trong mang ");
		scanf("%d",&n);
		
	}while(n< 1 || n > 100);
	
	int i ;
	for( i = 0 ; i < n ; i++){
		printf(" a[%d] = ", i);
		scanf("%d" ,&a[i]);
	}
	
	// goi ham xu ly 
	printf("\n Max = %d" , timMax(a,n));
	printf("\n Min = %d", timMin(a,n));
}
