#include <stdio.h>
int main(){
	int a ;
	printf(" nhap gia tri cho a =");
	scanf("%d",&a);
	
	printf("%d la so %s " ,a, (a%2==0?"Chan":"Le")) ;
} 
