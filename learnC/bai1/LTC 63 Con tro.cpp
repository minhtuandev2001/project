#include<stdio.h>
int main(){
	// dia chi cua bien
	int var ;
	printf("\n nhap var = ");
	scanf("%d",&var);
	
	printf("\n Gia tri cua var = %d " , var);
	printf("\n dia chi cau bien var trong bo nho la %p: ",&var);
	
	int *pc , c;
	c=10;
	
	pc = &c ; // bien con tro dung luu tru dia chi 
	
	printf("\n Gia Tri cua c la : %d" , *pc);
	printf("\n Dia chi cua bien c la %p : ",pc);
	
	*pc = 1  ;
	printf("\n Gia Tri cua c la : %d" , c);
	printf("\n Dia chi cau bien c la %d : ",*pc);
}
