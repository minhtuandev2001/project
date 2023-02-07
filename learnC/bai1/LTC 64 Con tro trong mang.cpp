#include<stdio.h>
int main(){
	int a[]= {1,2,3,4,5};
	
	printf("\n Mang a :");
	for(int i = 0 ; i< 5 ; i++){
		printf(" %d ", a[i]);
	}
	
	printf("\n Dia chi cac phan tu ");
	for(int i = 0 ; i< 5 ; i++){
	printf(" %d ", &a[i]);
	
	}
	printf("\n Dia chi cua mang a la %p ",&a);
	printf("\n Dia chi cua mang a la %p ",&a[0]);
	
	int b[10];
	int n=10;
	
	printf("\n Nhap vao cac gia tri cua mang :\n");
	for(int i = 0 ; i< n ; i++){
		printf(" b[%d] ",i);
	//	scanf("%d",&b[i]);
		scanf("%d",b+i); // b la vi tri , dau tien
	}
	
	printf("\n Mang vua nhap la :\n");
	for(int i = 0 ; i< n ; i++){
		//printf("%d\t",b[i]);
		printf("%d\t",*(b+i));
	}
}
