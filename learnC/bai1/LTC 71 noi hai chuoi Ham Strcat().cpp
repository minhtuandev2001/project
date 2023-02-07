#include<stdio.h>
#include<string.h>
void my_strcat(char x[] , char y[] ){
	size_t len1 = strlen(x);
	size_t len2 = strlen(y);
	size_t sizex = sizeof(x)+sizeof(y);
	printf("\n do dai sau khi cong chuoi 3 va 2 = %d",sizex);
	printf("\nsizeof khac voi len %d",len1+len2);
	
	if(sizex<len1+len2+1){
		printf("Loi : x khong du kich thuoc chua 2 chuoi ");
	}else{
		for(int i = len1 ; i< len1+len2 ; i++){
			x[i]= y[i-len1];
		}
		x[len1+len2]='\0';
	}
}
int main(){
	char s_1[100] = "Xin chao";
	char s_2[20] = " Tuan !";
	char s_3[100] = "Bui minh ";
	
	
	printf("\n s_1 = %s" , s_1);
	printf("\n s_2 = %s",s_2);
	
	strcat(s_1,s_2);
	printf("\n %s",s_1);
	my_strcat(s_3,s_2);
	printf("\n %s",s_3);
}
