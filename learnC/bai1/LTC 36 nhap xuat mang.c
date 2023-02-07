#include<stdio.h>
int main(){
	int a[100];
	int n;
	
	do{
		printf(" nhap vao so luong phan tu cua mang ");
		scanf("%d",&n);
	}while(n< 1 || n> 100);
	
	// nhap du lieu cho mang 
	int i ;
	for( i = 0 ; i< n ; i++){
		printf(" a[%d] = " , i);
		scanf("%d",&a[i]);
	}
	
	// xuat du lieu cua mang 
	
	int j ;
	for(j = 0 ; j < n ; j++){
		printf(" %d ", a[j]);
	}
	
	// tong cua cac phan tu cua mang 
	
	int q , sum = 0 ;
	for(q = 0 ; q < n ;q++){
		sum = sum + a[q];
	}
	printf("\n tong cua cac phan tu cua mang = %d" ,sum );
}
