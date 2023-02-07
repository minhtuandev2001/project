#include<stdio.h>
#include<string.h>
void xoaxuongdong( char x[]){
	size_t len = strlen(x);
	if(x[len]=='\n'){
		x[len-1]='\0';
	}
}
int main(){
	char chuoi[50];
	char chuoi_con[50] ;
	
	printf("\n Nhap vao chuoi ");
	fgets(chuoi  , sizeof(chuoi) , stdin);
	xoaxuongdong(chuoi);
	
	printf("\n Nhap vao chuoi con " );
	fgets(chuoi_con , sizeof(chuoi_con) , stdin);
	xoaxuongdong(chuoi_con);
	
	char *kq = strstr(chuoi,chuoi_con);
	if(kq!=NULL){
		printf("\n Tim thay chuoi con ");
	}else{
		printf("\n khong tim thay");
	}
}
