#include<stdio.h>
#include<math.h>
// liet ke cac SNT  nho hon n voi n > 1

int kt_SNT(int x){
	if(x<=1) return 0 ;  // chu y chut
	int i ;
	for(i = 2 ; i <=sqrt(x) ; i++){
		if(x%i==0) return 0;
	}
		return 1;
}
int main(){
	// nhap lieu 
	int n ; 
	
	do{
		printf(" nhap n ");
		scanf("%d", &n);
	}while(n<1);
	
	//xu ly , xuat ket qua
	int j ; 
	for( j = 2 ; j <=n ; j++){
		int kt = kt_SNT(j);
		if(kt==1){
			printf(" %d " , j);
		}
	}
}


