#include<stdio.h>
#include<string.h>
int my_strlen( char x[]){
	int count = 0 ;
	while(x[count]!='\0'){
		count++;
	}
	return count;
}
int main(){
	// khai bao va gan san gia tri 
	char ten[50]="BUI MINH TUAN";
	
	printf("\n ten cua ban la : %s",ten);
	printf("\n do dai ten bang %d" , strlen(ten));
	
	printf("\n my_strlen :");
	printf("\n ten cua ban la : %s",ten);
	printf("\n do dai ten bang %d" , my_strlen(ten));
	
	// khai bao roi sau do nhap gia tri 
	char address[50];
	// ham strlen se tinh them ki tu \0 nua 
	printf("\n Nhap dia chi nha ban  :") ;
	fgets(address , sizeof(address) , stdin);
	
	printf("\n chuoi vua nhap : %s",address);
	printf("\n chuoi dc nhap + them ki tu null : %d",strlen(address));
	
	printf("\n ham strlen(ten_mang)-1 thi se ra dung : %d",my_strlen(address)-1);
}
