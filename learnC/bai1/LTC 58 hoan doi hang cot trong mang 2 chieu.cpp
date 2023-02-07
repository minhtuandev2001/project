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
void thayDoiGiaTri2Dong(int x[100][100] , int m , int n , int k, int y){
	 /*
	 1 2 3 
	 4 5 6
	 7 8 9
	 
	 k = 1; 
	 y = 2;
	 
	 1 2 3 
	 7 8 9
	 4 5 6
	 */
	 // khi chuyen doi dong nay sang dong khac thi lay goc la n ( n = cot ) 
	 // vi cac phan tu tren dong do keo dai den het cot , noi chung hang chua chac > dong 
	 // nen chua chac chuyen het cac phan tu cua dong nay sang dong khac  
	for(int i = 0 ; i< n ; i++){
		int tam = x[k][i];
		x[k][i]= x[y][i];
		x[y][i] = tam ;
	}
}
void thayDoiGiaTri2Cot(int x[100][100] ,int m, int n , int k , int y ){
	/*
	1 2 3 
	4 5 6
	7 8 8
	k = 1 ; 
	y = 2  ;
	
	1 3 2 
	4 6 5 
	7 9 8
	*/
	
	int tam  ; 
	for(int j = 0 ; j < m ; j++){
		tam = x[j][k];
		x[j][k] = x[j][y];
		x[j][y] = tam ;
	}
}
int main(){
	int a[100][100];
	int m , n;
	Nhap(a,m,n);
	Xuat(a,m,n);
	
//	thayDoiGiaTri2Dong(a,m,n,1,2);
//	Xuat(a,m,n);
//	
	thayDoiGiaTri2Cot(a,m,n,1,2);
	Xuat(a,m,n);
} 
