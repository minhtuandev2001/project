#include<stdio.h>
#include<math.h>
// c1 
int kt_SNT(int n){
	int i ;
	if(n < 1)
		return 0;
		for(i = 2 ; i <=n ; i++){
			if(n%i == 0)	return 0; 			
			}
			return 1; 
}
int main(){
	// nhap lieu
	int n ;
	printf(" nhap n ");
	scanf("%d", &n);
	
	// goi ham 
	int kt = kt_SNT(n);
	
	//xu ly 
	if(kt==0){
		printf(" khong phai la so nguyen to ");
	} else{
		printf(" day la so nguyen to ");
	}
}

