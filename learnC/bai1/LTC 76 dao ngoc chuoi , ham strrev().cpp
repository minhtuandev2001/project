#include<stdio.h>
#include<string.h>
void xoaxuongdong(char x[]){
	size_t len = strlen(x);
	if(x[len-1]=='\n'){
		x[len-1] = '\0';
	}
}
void my_strrev(char x[] ){
	size_t len = strlen(x);
	
	for(int i = 0 ; i< (len-1)/2 ; i++){
		char tam = x[len-1-i];
		x[len-1-i] = x[i];
		x[i] = tam;
	}
}
int main(){
	char s[50] ="";
	printf("Nhap s= ");
	fgets(s, sizeof(s) , stdin);
	xoaxuongdong(s);	
	printf("\n s = %s " ,s);
	
	printf("\n chuoi sau khi dao : %s ",strrev(s));
	
	my_strrev(s);
	printf("\n chuoi sau khi dao : %s ",s);
}
