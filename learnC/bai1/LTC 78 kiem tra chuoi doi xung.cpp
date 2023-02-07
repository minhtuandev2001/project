#include<stdio.h>
#include<string.h>
void xoaxuongdong( char x[]){
	size_t len = strlen(x);
	if(x[len]=='\n'){
		x[len-1]='\0';
	}
}
int kiemTraDoiXung(char x[]){
	// 1 doi xung 
	// 0 thi ko doi xung 
	size_t len = sizeof(x);
	for(int i = 0 ; i< len/2 ; i++){
		if(x[i]==x[len-i-1])
			return 0;
	}
	return 1;
}
int main(){
	char s[50];
	
	printf("\n Nhap chuoi ");
	fgets(s , sizeof(s) , stdin);
	xoaxuongdong(s);
	int kt = kiemTraDoiXung(s);
	
	if(kt){
		printf("\n chuoi doi xung ");
	}else{
		printf("\n khong doi xung ");
	}
}

