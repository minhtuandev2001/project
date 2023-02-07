#include<stdio.h>

int main(){
	
	for(int i = 1 ; i < 10 ; i++){
		printf("bang cuu chuong %d\n",i);
		for(int j = 0 ; j < 10 ; j++){
			printf("%d x %d = %d",i,j,i*j);
			printf("\n");
		}
		printf("\n");
	}	
	return 0 ;
}
