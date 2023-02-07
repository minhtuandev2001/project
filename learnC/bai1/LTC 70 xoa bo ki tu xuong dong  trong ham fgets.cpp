#include<stdio.h>
#include<string.h>
int my_strlen( char x[]){
	int count = 0 ;
	while(x[count]!='\0'){
		count++;
	}
	return count;
}
void xoaXuongDong(char x[]){
	size_t len = strlen(x);
	// TUAN\n\0 => TUAN\0
	 if(x[len-1]=='\n'){
	 	x[len-1]='\0';
	 }
}
int main(){
	// khai bao roi sau do nhap gia tri 
	char address[50];
	// ham strlen se tinh them ki tu \0 nua 
	printf("\n Nhap dia chi nha ban  :") ;
	fgets(address , sizeof(address) , stdin);
	
	xoaXuongDong(address);
	printf("\n SU DUNG HAM XOAXUONGDONG de xoa di ki tu xuec n");
	// uu diem khi su dung thi khong can - 1 nua
	printf("\n chuoi vua nhap : %s",address);
	printf("\n do dai mang ki tu la : %d",strlen(address));
	
	printf("\n su dung ham my_strlen");
	printf("\n do dai mang ki tu la : %d",my_strlen(address));
}
