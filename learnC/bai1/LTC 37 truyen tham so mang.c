#include<stdio.h>
float trung_binh_cong (int x[] ,int n){
	int j , tong = 0;
	for( j = 0 ; j < n ; j++){
		tong = tong + x[j];
	}
	return (float)tong/n;	
}
float trung_binh_cong_soduong(int x[] , int n){
	int i , tong =0 ;
	int  soduong; 
	for( i = 0 ; i < n ; i++){
		if(x[i]>=0){
			tong = tong + x[i];
			soduong ++;
		}
	}
	return soduong>0?(float)tong/soduong:-1;
}
int main(){
	//  nhap lieu 
	int a[100];
	int n ;
	
	do{
		printf(" nhap so luong phan tu cua mang ");
		scanf("%d",&n);
	}while(n<1 || n>100);
	
	// nhap 
	int i ;
	for( i = 0; i < n ; i ++){
		printf("a[%d] =",i);
		scanf("%d", &a[i]);
	}
	// goi ham . xu ly
	printf("\n trung binh cong = %.2f", trung_binh_cong(a,n)) ;
	
	float tbcsd = trung_binh_cong_soduong(a,n);
	
	if(tbcsd>0){
		printf("\n tong trung binh cong cac so duong %.2f",tbcsd);
	}else{
		printf("\n mang khong co so duong ");
	}
}


