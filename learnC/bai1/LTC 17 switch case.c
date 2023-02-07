#include<stdio.h>
int main(){
	int n;
	
	printf(" nhap n bat dau tu 2 ");
	
	scanf("%d",&n);
	
	switch(n){
		
		case 2:
			printf(" thu 2 ");
			break;
		case 3:
			printf(" thu 3 ");
			break;
		case 4 : 
			printf(" thu 4 ");
			break;
		case 5: 
			printf(" thu 5 ");
			break;
		case 6: 
			printf(" thu 6 ");
			break;	
		case 7 :
			printf(" thu 7 ");
			break;
		case 8 : 
			printf(" chu nhat ");
			break;
		default :
			printf(" khong co hoac nhap sai ");
	}
}
