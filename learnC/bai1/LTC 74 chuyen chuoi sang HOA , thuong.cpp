#include<stdio.h>
#include<string.h>
void my_strupr(char x[]){
	for(int i = 0 ; i< strlen(x) ; i++){
		if(x[i]>=97 && x[i]<=122){
			x[i] = x[i]-32 ;
		}
	}
}
void my_strlwr(char x[]){
	for(int i = 0 ; i< strlen(x) ; i++){
		if(x[i]>=65 && x[i]<=90){
			x[i] = x[i]+32 ;
		}
	}
}
int main(){
	char s[40] = "";
	
	printf("\n Nhap chuoi s ");
	fgets(s , sizeof(s), stdin);
	printf("\n chuoi vua nhap vao la : %s ",s);
	
	printf("\n chuyen san viet HOA : %s",strupr(s));
	printf("\n chuyen san viet thuong : %s",strlwr(s));
	
	my_strupr(s);
	printf("\n chuyen sang Hoa (tu code) : %s", s);
	my_strlwr(s);
	printf("\n chuyen sang thuong (tu code) : %s", s);
	
}
