#include<stdio.h>
int main(){
	// khai  bao mang
	int a[10];
	float b[100];
	char c[1000];
	
	// khai bao mang va gan gia tri ban dau 
	int x[10] = {};
	int y[3] = { 9, 6, 15};
	
	// gan du lieu cho mang 
	
	// Mang bat dau tu vi tri so 0
	y[1] = 10;
	
	printf("\n 0- %d ", y[0]);
	printf("\n 0- %d ", y[1]);
	printf("\n 0- %d ", y[2]); 
}
