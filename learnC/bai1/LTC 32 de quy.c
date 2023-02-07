#include<stdio.h>
int giaithua(int n ){
	if(n==0 || n==1)
		return 1;
	else
		return n*giaithua(n-1);
} 
int main(){
	int n ; 
	
	do{
		printf(" nhap vao n (n>1) ");
		scanf("%d",&n);
	}while(n<0);
	
	// goi ham 
	int kq = giaithua(n);
	printf(" giai thua cau %d = %d ", n ,kq);
}
