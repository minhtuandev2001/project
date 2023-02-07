#include<stdio.h>
#include<math.h>
int so_ngay( int thang , int nam ){
	switch(thang){
		case 1:
		case 3:
		case 5:
		case 7: 
		case 8:
		case 10:
		case 12:
			return 31;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		case 2:
			return (nam%400 == 0 || nam%4 == 0 && nam%100 !=0)? 29:28;
		default :
			return -1 ;
	}
}
int ngay_trong_nam( int ngay,int thang ,int nam){
	int ntn = 0 ; 
	int i;
	for(i =1 ; i< thang ; i++){
		ntn += so_ngay(i , nam);
	}
	ntn+=ngay ;
	return ntn;
}
int inNgaytruocdo(int ngay , int thang , int nam ){
	if (ngay==1){
		if(thang==1){
			ngay = 31 ;
			thang = 12;
			nam--;
		}else{
			thang--;
			ngay=so_ngay(thang, nam);
		}
	}else{
		ngay--;
	}
	printf("\n ngay truoc do la %d / %d / %d",ngay , thang , nam );
}
int inNgaysaudo(int ngay , int thang , int nam){
	int nct = so_ngay(thang , nam );
	if (ngay == nct ){
		if(thang==12){
			ngay = 1 ;
			thang = 1;
			nam++;
		}else{
			ngay = 1;
			thang++;
		}
	}else{
		ngay++;
	}
	printf("\n ngay truoc do la %d / %d / %d",ngay , thang , nam );
}
int main(){
	int ngay ,  thang , nam ;
	
	do{
		printf(" nhap ngay thang nam ");
		scanf("%d %d %d" , &ngay , &thang , &nam);
	}while(ngay<1 || ngay >31 || thang < 1 || thang > 12 || nam <1);
	
	// cau a , so ngay cua thang
	printf(" so ngay cua thang %d" ,so_ngay(thang , nam));
	
	// cau b , tim ngay trong nam
	printf("\n ngay trong nam %d" ,ngay_trong_nam(ngay ,thang , nam));
	
	// cau c , tim ngay truoc do
 	//	printf("\n ngay truoc do la %d  %d  %d", inNgaytruocdo(ngay , thang , nam));
	inNgaytruocdo(ngay , thang , nam);
	
	// cau d ,in r ngay sau do
	inNgaysaudo(ngay , thang , nam );
}
