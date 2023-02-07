#include<stdio.h>
void nhapMang(int x[] , int &n){
	do{
	printf(" so luong phan tu cua mang  ");
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
int timMax(int x[] , int n){
	int max = x[0];
	for(int i =0 ; i < n ; i++){
		if(x[i]> max){
			max = x[i];
		}
	}
	return max;
}
void MangConKhongGiam(int x[] , int n){
	int b[100];
	for(int i = 0 ; i< n ; i++){
		b[i]=1;
	}
	xuat(b,n);
	for(int i = n-1  ; i> 0 ; i--){
		if(x[i]>=x[i-1]){
			b[i-1]= b[i]+1;
		}
	}
	printf("\n mang  con dai nhat , 0 giam \n");
	xuat(b,n);
	
	int soluong = timMax(b,n);
	// cai nay in ra max , max nay la do dai cua mang con 
	printf("do dai cua mang con : %d",soluong);
	
	for(int i = 0 ; i< n ; i++){
		if(b[i]== soluong){
			printf("\n mang khong giam dai nhat :");
			for(int j= i ; j < soluong+i ; j++)
				printf(" %d ", x[j]);
		}
	}
}

int main(){
	int a[100] ;
	int n ;
	nhapMang(a,n);
	xuat(a,n);
	MangConKhongGiam(a,n);
}
