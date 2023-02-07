#include<stdio.h>
int main(){
	int n ; 
	
	Nhap:
	printf(" nhap n = ");
	scanf("%d", &n);
	
	// xu ly 
	if(n<=0) goto Nhap;
	
	int i ;
	for( i = 0 ; i <= n ; i++){
		if(i%2==0) continue;
		printf("%d " , i);
	}
}
