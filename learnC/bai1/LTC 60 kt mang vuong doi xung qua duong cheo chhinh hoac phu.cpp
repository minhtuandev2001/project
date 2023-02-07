#include<stdio.h>
void Nhap(int x[100][100] , int &m ){
	do{
		printf(" Nhap vao m , n");
		scanf("%d",&m);
		
	}while(m<0);
	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j < m ; j++){
			printf(" x[%d][%d] = " , i,j);
			scanf("%d",&x[i][j]);
		}
	}
}
void  Xuat(int  x[100][100] , int m){
	printf("\n Ma Tran : \n");
	for(int i = 0 ; i< m ; i++){
		for(int j = 0 ; j < m ; j++){
			printf(" %d\t",x[i][j]);
		}
		printf("\n");	
	}
}
/*  1 2 3 
	4 5 6 
	7 8 9
	
	1 2 3 5
	2 1 4 6
	3 4 1 1
	5 6 1 1
	
	// bat dau tu 0;
	x[i][j] = x[j][i];
	x[1][2] = 4
	x[2][1] = 4
*/
int kiemtraMangDoiXungCheoChinh( int x[100][100] ,int m ){
	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j < m ; j++){
			if(x[i][j]!=x[j][i]){
				return 0;	
			}
		}
	}
	return 1;
}
int kiemtraMangDoiXungCheoPhu( int x[100][100] ,int m ){
	for(int i = 0 ; i < m ; i++){
		for(int j = 0 ; j < m ; j++){
			if(x[i][j]!=x[m-1-j][m-1-i]){
				return 0;	
			}
		}
	}
	return 1;
}
int main(){
	int a[100][100];
	int m ;
	
	Nhap(a,m);
	Xuat(a,m);
	
	printf("\n CHINH "); 
	int kt = kiemtraMangDoiXungCheoChinh(a,m);
	if(kt){
		printf("\n mang nay la mang doi xung");
	}else{
		printf("\n mang nay khong doi xung ");
	}
	
	printf("\n PHU"); 
	int kt2 = kiemtraMangDoiXungCheoPhu(a,m);
	if(kt2){
		printf("\n mang nay la mang doi xung");
	}else{
		printf("\n mang nay khong doi xung ");
	}
}
