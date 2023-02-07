#include<stdio.h>
// xu ly khong nhap duc chuoi
int main(){
	int tuoi ;
	char ten[50];
	
	printf("\n nhap tuoi cua ban :");
	scanf("%d",&tuoi);				// khi su dung scanf thi chung ta du 1 dau enter==\n;
	
	getchar();    // khac phuc la them getchar(); sau scanf 
	printf("\n nhap ten cua ban :");
	fgets(ten , sizeof(ten) , stdin);
	
	puts(ten);
	printf(" tuoi : %d",tuoi);
}
