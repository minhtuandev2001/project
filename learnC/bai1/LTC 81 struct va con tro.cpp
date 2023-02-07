#include<stdio.h>
#include<math.h>
struct PhanSo{
	int tuSo;
	int mauSo;
};
void  nhapPhanSo(PhanSo *ps){
	printf("\n Nhap vao tu so :");
	scanf("%d",&ps->tuSo);
	
	do{
		printf("\n Nhap vao mau so ");
		scanf("%d",&ps->mauSo);
	}while(ps->mauSo==0);
	 
}
void inPhanSo(PhanSo ps){
		if(ps.mauSo<0){
		ps.tuSo*=-1;
		ps.mauSo*=-1;
	}
	// 1/-5 => -1/5
	printf("%d/%d",ps.tuSo , ps.mauSo);
}
void rutGon(PhanSo *ps){
	// tim USCLN
	int a = ps->tuSo;
	int b = ps->mauSo;
	int uscln = 1;
	
	a= abs(a);
	b= abs(b);
	if(a==0){
		uscln = a+b;
	}else{
		while(a!=b){
			if(a>b){
				a =a-b;
			}
			if(b>a){
				b= b-a;
			}
		}
		uscln = a;
	}
	ps->tuSo/=uscln;
	ps->mauSo/=uscln;
	
	printf("%d/%d",ps->tuSo , ps->mauSo);
}
int main(){
	PhanSo ps1 , ps2 ;
	printf("\n Phan so thu nhat ");
	nhapPhanSo(&ps1);
	printf("\n Phan so thu hai ");
	nhapPhanSo(&ps2);
	printf("\n Phan so vua nhap la :");
	inPhanSo(ps1);
	printf("\t");
	inPhanSo(ps2);
	
	printf("\n cac phan so dc rut gon nhu sau ");
	printf("\n ps1 :");
	rutGon(&ps1);
	printf("\n ps2 :");
	rutGon(&ps2);
	
}
