#include<stdio.h>
int FIbo(int x){
	if(x==0)
		return 0;
	else if(x==1)
		return 1;
	else if(x==2)
		return 1;
	else
		return  FIbo(x-1)+FIbo(x-2);
	
}
int main(){
	int n ; 
	
	do{
		printf(" Nhap n ");
		scanf("%d",&n);	
	}while(n<0);
	
	printf("\n fibonacci(%d) = %d ",n ,FIbo(n));
	
}
