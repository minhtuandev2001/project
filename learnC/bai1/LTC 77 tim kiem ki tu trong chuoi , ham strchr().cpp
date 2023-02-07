#include<stdio.h>
#include<string.h>
char *my_strchr( char x[] , char a){
	size_t len = strlen(x);
	
	for(int i = 0 ; i< len ; i++){
		if(a==x[i]){
				return &x[i];
		}
	}
}
int main(){
	char x1[50] = "minhtuan.com";
	char *x2 ;
	x2 = strchr(x1, '.');	
	printf("\n x1 = %s ",x1);
	printf("\n x2 = %s " , x2);
	
	char *x3 ;
	x3 = my_strchr(x1,'a');	
	printf("\n x1 = %s ",x1);
	printf("\n x3 = %s " ,x3);
}
