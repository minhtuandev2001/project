#include<stdio.h>
#include<string.h>
void my_strcpy(char x1[] , char x2[]){
	size_t len2 = strlen(x2);
	
	for(int i = 0 ; i < len2 ; i++){
		x1[i]=x2[i];
	}
	x1[len2]='\0';	
}
int main(){
	char s1[100]="xin chao";
	char s2[20] = "Tuan" ;
	char s3[7]="bui";
	
	
	
	printf("\n s1 = %s ",s1);
	printf("\n s2 = %s " , s2);
	
	strcpy(s2,s1);
	printf("\n no ghi de len chuoi s2 , value=tuan => value= xin chao");
	printf("\n chuoi sau khi coppy :%s",s2);
	
	printf("\n su dung my_strcpy : copy chuoi 2 vao 3");
	my_strcpy(s3,s2);
	printf("\nchuoi copy tu s2 sang s3 : %s",s3);
	
}
