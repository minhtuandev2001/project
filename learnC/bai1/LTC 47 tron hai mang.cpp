#include<stdio.h>
#include "stdlib.h"
void nhapMang(int x[] , int &n){
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
void sapXepTangDan(int x[] , int n){
	int tam;
	for(int i = 0 ; i< n-1 ; i++){
		for(int j = i+1 ; j< n ; j++){
			if(x[i]>x[j]){
				tam = x[i];
				x[i] = x[j];
				x[j]=tam;	
			}
		}
	}
}
void tronmang(int x1[], int n_x1, int x2[], int n_x2,int x3[], int &n_x3){
	n_x3 = n_x1+n_x2;
	int i1 = 0;
	int i2 = 0;
	int i3 = 0;
	while(i3<n_x3){
		if(i1>=n_x1){
			x3[i3]=x2[i2];
			i2++;
		}else if(i2>=n_x2){
			x3[i3]=x1[i1];
			i1++;
		}else if(x1[i1]<x2[i2]){
			x3[i3]=x1[i1];
			i1++;
		}else{
			x3[i3]=x2[i2];
			i2++;
		}
		i3++;
	}
}
int main(){
	int a[100] , b[100] , c[200];
	int n1,n2,n3;
	printf("********************\n");
	nhapMang(a, n1);
	xuat(a, n1);
	sapXepTangDan(a, n1);
	xuat(a, n1);
	
	printf("*********************\n");
	nhapMang(b, n2);
	xuat(b, n2);
	sapXepTangDan(b, n2);
	xuat(b, n2);
	
	printf("*********************\n");
	tronmang(a, n1, b, n2, c, n3);
	xuat(c, n3);
	
}
