#include<stdio.h>
void Nhap(int x[100][100] , int &m , int &n){
	do{
		// m hang va n cot 
		printf(" nhap vao m , n ");
		scanf("%d%d" , &m , &n);
	}while(n< 0 || m<0);
	
	for(int i = 0 ; i< m ; i++){
		for(int j = 0 ; j<n ; j++){
			printf(" x[%d][%d] = " ,i ,j);
			scanf("%d",&x[i][j]);
		}
	}
}
void Xuat(int x[100][100] ,int m , int n){
	printf("\n Ma Tran :\n");
	for(int i = 0 ; i<m ; i++){
		for(int j = 0 ; j<n ; j++){
			printf(" %d\t", x[i][j]);
		}
		printf("\n");
	}
}
double trungbinhcongALL(int x[100][100] ,int m , int n ){
	if(m<=0 || n<=0)
		return 0;
	int tong =0;
	for(int i = 0 ; i< m ; i++){
		for(int j = 0 ; j < n ; j++){
			tong = tong +x[i][j];
		}
	}
	double trungbinhcong = (double)tong/(m*n);
	return trungbinhcong;
}
double trungbinhchiaHet5(int x[100][100] , int m , int n){
	if(m<0 || n<0){
	return 0;
	}
	int tong =0;
	int dem = 0 ;
	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j< n; j++){
			if(x[i][j]%5==0){
				tong += x[i][j];
				dem++;
			}
		}
	}
	double TBC5 = 0;
	if(dem>0){
		TBC5 = (double)tong/(dem);
	}
	return TBC5;
}

int main(){
	int a[100][100];
	int m , n ;
	
	Nhap(a,m,n);
	Xuat(a,m,n);
	printf(" TBC tat ca la : %.2f" ,trungbinhconALL(a,m,n));
	
	printf("\n TBC chia het cho 5 %.2f" , trungbinhchiaHet5(a,m,n));
	
}
