#include<stdio.h>
int main(){
	int n ;
	
	printf(" nhap n ");
	scanf("%d",&n);
	
	// kiem tra n co nho hon 5 , co thi in ra YES
	
	if(n < 5){
		printf(" YES");
	}
	
	// new n lon hon 5 
	if(n < 10){
		printf("\nnho hon 10");
	} else 
	if(n< 20){
		printf("\n nho hon 20");
	}
	// kiem tra chan hoac le
	
	if(n%2==0){
		printf("\n nla chan");
	}else
	{
		printf("\n la le");
	}
	
}

