#include<stdio.h>
 int main(){
 	int n , giai_thua;
 	
 	do {
 		printf(" nhap (n < 0) de thoat ");
 		printf("\n nhap vao(n >= 0) :");
 		scanf("%d", &n);
 		giai_thua = 1 ; 
 		int i ;
 		for(i = 1 ; i<=n ; i++){
 			giai_thua =giai_thua* i; 
		 }
		 printf("\n giai thua cua %d = %d",n , giai_thua);
	   } while(n>0);
	   
 }
