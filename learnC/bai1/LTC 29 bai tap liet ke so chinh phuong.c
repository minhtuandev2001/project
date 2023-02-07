#include<stdio.h>
#include<math.h>
// liet ke cac so chinh phuong nho hon n voi n >1
int kt_SCP (int x){
	int can = (int)sqrt(x);
	if(pow(can,2)==x) {
		return 1;
	}  else{
		return 0;
	}
} 
int main(){
	// nhap lieu 
	int n ; 
	
	do {
		printf(" nhap n ");
		scanf("%d", &n);
	} while(n<1);
	
	// xu ly , xuat
	int i ;
	for (i = 2 ; i <=n ; i++){
		int kt = kt_SCP(i);
			if(kt==1){
				printf(" %d",i);
			}
		}
}
