#include<stdio.h>
int main(){
	int a , b  , USCLN;
	
	printf(" nhap a ");
	scanf("%d", &a) ;
	
	printf("\n nhap b ");
	scanf("%d" , &b) ;
	
	
	if(a!=0 && b!= 0){
		while(a!=b){
			if(a> b) {
				a = a- b;
			}else{
				b = b- a ;
			}
		} 
		// 15 vs 6
		// 9 vs 6 
		// 3 vs 6
		// 3 = 3
		printf(" USCLN = %d " , a);
	} else 
	if(a==0 || b==0 ){
		USCLN= a+b; 
		printf("\n USCLN = %d",USCLN) ;
	}
}
