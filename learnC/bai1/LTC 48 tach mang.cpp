#include<stdio.h>
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
void tachMang(int x[] , int n, int x1[] , int &n1, int x2[] , int &n2 ){
	int i1 = 0 ;
	n1 = 0;
	int i2 = 0 ;
	n2=0;
	for(int i = 0 ; i<n ; i++){
		if(x[i]%2==0){
			x1[i1]= x[i];
			i1++;
			n1++;
		}else{
			x2[i2]= x[i];
			i2++;
			n2++;
		}
	}
}

int main(){
	int a[100] , b[100] ,  c[200];
	int n,n1 , n2;
	
	nhapMang(a,n);
	xuat(a,n);
	
	tachMang(a,n,b,n1,c,n2);
	xuat(b,n1);
//	printf("\n");
	xuat(c,n2);
}
