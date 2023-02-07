#include<stdio.h>
#include<limits.h>
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
void timMinthuhai(int x[] , int n){
	int min = INT_MAX;
	int min_2 = INT_MAX;
	
	for(int i = 0 ; i < n ; i++){
		if(x[i]<min)
			min = x[i];
	}
	for(int i = 0 ; i< n ; i++){
		if(x[i]==min){
			continue;
		}else{
			if(x[i]<min_2){
				min_2=x[i];
			}
		}
	}
	printf("\n min thu nhat trong mang la : %d",min);
	printf("\n min thu hai trong mang la : %d",min_2);
} 
void timMaxthuhai(int x[] , int n){
	int max = INT_MIN;
	int max_2 = INT_MIN;
	
	for(int i = 0 ; i < n ; i++){
		if(x[i]>max)
			max = x[i];
	}
	for(int i = 0 ; i< n ; i++){
		if(x[i]==max){
			continue;
		}else{
			if(x[i]>max_2){
				max_2=x[i];
			}
		}
	}
	printf("\n max thu nhat trong mang la : %d",max);
	printf("\n max thu hai trong mang la : %d",max_2);
} 
int main(){
	int a[100];
	int n ;
	nhapMang(a,n);
	xuat(a,n);
	timMinthuhai(a,n);
	timMaxthuhai(a,n);
}
