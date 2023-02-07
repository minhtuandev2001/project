#include<stdio.h>
int main(){
	printf("\n dung ham fgets");
	
	char name[50];
	printf("\n nhap dia chi ");
	fgets(name , sizeof(name), stdin);	  // nhap chuoi co chap nhan khoan trang 
	
	printf("\n dung puts de in ra "); // cai nay co the in them 1 ki tu \n cuoi
	puts(name);
	printf("ko can ki hieu van xuong dong dc  %s" , name);
	
	
	printf("\n dung ham scanf de nhap ");
	
	char ten[50];
	printf("\n Nhap vao ten cua ban : ");
	scanf("%s",ten);  // 	 dung scanf thi nhap chuoi khong duoc co khoan trang 
	printf("\n ten cua ban la : %s" ,ten);
} 
