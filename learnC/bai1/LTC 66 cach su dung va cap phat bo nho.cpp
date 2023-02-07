#include<stdio.h>
#include<stdlib.h>
int main(){
	int n;
	
	printf("\n Nhap so luong phan tu :");
	scanf("%d",&n);
	
//	int* ptr = (int*) malloc(n*sizeof(int)); // 
	int* ptr = (int*) calloc(n,sizeof(int)); // cap phat bo nho lien ke , gan gia tri ban dau la 0 calloc
	if(ptr==NULL){
		printf("\n Khong cap phat duoc :");
		exit(0);
	}
	
	for(int i = 0 ; i< n ; i++){
		printf("a[%d] =",i);
		scanf("%d",ptr+i);
	}
	
	// xuat mang 
	for(int i = 0 ; i< n ; i++){
		printf("%d\t",*(ptr+i));   // lay gia tri trong dia chi 
	}
	
	int x ;
	printf("\n Kich thuoc mang can thay doi ");
	scanf("%d",&x);
	
	realloc(ptr,x);
	// xuat 
	printf("\n");
	for(int i = 0 ; i< x ; i++){
		printf("%d\t",*(ptr+i));
	}
	
	free(ptr);
}
