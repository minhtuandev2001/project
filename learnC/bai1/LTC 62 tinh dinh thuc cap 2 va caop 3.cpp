#include<stdio.h>
void Nhap(int x[100][100] , int &m , int &n ){
	do{
		printf(" Nhap vao m , n");
		scanf("%d%d",&m , &n );
		
	}while(n<0 || m< 0 );
	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j < n ; j++){
			printf(" x[%d][%d] = " , i,j);
			scanf("%d",&x[i][j]);
		}
	}
}
void  Xuat(int  x[100][100] , int m , int n ){
	printf("\n Ma Tran : \n");
	for(int i = 0 ; i< m ; i++){
		for(int j = 0 ; j < n ; j++){
			printf(" %d\t",x[i][j]);
		}
		printf("\n");	
	}
}
/*
	1 2 3 
	4 5 6
	7 8 9
	
	// t1 = 1*5*9 + 2*6*7 + 3*4*7 
	// => a[k][l]*a[mod((k+1),n)][mod((l+1),n)] ? vout qua mang 
	
	// t2= 3*5*7 + 2*4*9 + 1*6*9 ;
	// => a[k][l]*a[mod((k+1),n)][mod((l-1),n)] ? vout qua mang
	 
*/
int mod(int x , int y){
	int r = x%y;
	return r<0?r+y:r;
}
int tinhDet( int x[100][100]  , int m ){
	int tong_1 = 0 ;
	int tong_2 = 0;
	
	int k = 0 ;
	for(int l = 0 ; l< m ; l++){
		int tam = 1 ;
		for(int j = 0 ; j< m ; j++){
			tam = tam*x[mod((k+j),m)][mod((l+j),m)];
		}
		tong_1 = tong_1+tam ;
	}
	
	k = 0 ;
	
	for(int l = 0 ; l< m ; l++){
		int tam = 1 ;
		for(int j = 0 ; j< m ; j++){
			tam = tam*x[mod((k+j),m)][mod((l-j),m)];
		}
		tong_2 = tong_2+tam ;
	}
	
	return tong_1 - tong_2;
}
int main(){
	int a[100][100];
	int m , n ; 
	
	Nhap(a,m,n);
	Xuat(a,m,n);
	
	printf("\n det(x) = %d " , tinhDet(a,m));
}
