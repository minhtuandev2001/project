#include<stdio.h>
#include<math.h>
int thoadieukien(int x){
	return (x%2==0 && x%3==0);
}
int kt_SNT(int x ){
	int i ;
	if(x<1)
		return 0 ;
	for( i = 2 ; i <=sqrt(x) ; i++){
		if(x%i==0)
			return 0;
	}
	return 1;
}
int main(){
	// nhhap lieu 
	
	int a[100];
	int n ;
	
	do{
		printf(" nhap so luong phan tu trong mang ");
		scanf("%d",&n);
		
	}while(n< 1 || n > 100);
	
	int i ;
	for( i = 0 ; i < n ; i++){
		printf(" a[%d] = ", i);
		scanf("%d" ,&a[i]);
	}
	printf(" phan tu chan chia het cho 3 ");
	
	int j ;
	for(j = 0 ; j< n ; j++){
		if(thoadieukien(a[j]))
		printf("\n %d " , a[j]);
	}
	printf("\n cac so nguyen to  trong mang ");
	int q ;
	for(q = 0 ; q< n ; q++){
		if(kt_SNT(a[q])==1)
		printf("\n %d " , a[q]);
	}
}
