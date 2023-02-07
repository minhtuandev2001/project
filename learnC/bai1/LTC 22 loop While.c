#include<stdio.h>
int main(){
	int n ;
	
	printf(" nhap n ");
	scanf("%d", &n);
	
	int i = 0 , tong = 0 ;
	while(i<=n){
		tong = tong +i ;
		i++;
	}
	printf("\n tong = %d ",tong);
}
