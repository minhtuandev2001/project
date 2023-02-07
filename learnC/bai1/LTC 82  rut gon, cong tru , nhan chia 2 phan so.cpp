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
void rutGon(PhanSo *ps){
	// tim USCLN
	int a = ps->tuSo;
	int b = ps->mauSo;
	int uscln = 1;
	
	a= abs(a);
	b= abs(b);
	if(a==0|| b==0){
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
	
//	printf("%d/%d",ps->tuSo , ps->mauSo);
}
void inPhanSo(PhanSo ps){
		if(ps.mauSo<0){
		ps.tuSo*=-1;
		ps.mauSo*=-1;
	}
	// 1/-5 => -1/5
	rutGon(&ps);
	
	printf("%d/%d",ps.tuSo , ps.mauSo);
}
PhanSo congPhanSo(PhanSo ps1 , PhanSo ps2){
	PhanSo kq ;
	// a/b + c/d => (a*d + c*b)/(b*d)
	kq.tuSo = ps1.tuSo*ps2.mauSo + ps2.tuSo*ps1.mauSo;
	kq.mauSo = ps1.mauSo*ps2.mauSo;
	
	return kq;
}
PhanSo truPhanSo(PhanSo ps1 , PhanSo ps2){
	PhanSo kq ;
	// a/b - c/d => (a*d - c*b)/(b*d)
	kq.tuSo = ps1.tuSo*ps2.mauSo - ps2.tuSo*ps1.mauSo;
	kq.mauSo = ps1.mauSo*ps2.mauSo;
	
	return kq;
}
PhanSo nhanPhanSo(PhanSo ps1 , PhanSo ps2){
	PhanSo kq ;
	// a/b * c/d => a*c / b*d
	kq.tuSo = ps1.tuSo*ps2.tuSo;
	kq.mauSo = ps1.mauSo*ps2.mauSo;
	
	return kq;
}
PhanSo chiaPhanSo(PhanSo ps1 , PhanSo ps2){
	PhanSo kq ;
	// (a/b) / (c/d) => 
	kq.tuSo = ps1.tuSo*ps2.mauSo;
	kq.mauSo = ps1.mauSo*ps2.tuSo;
	
	return kq;
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
	
	printf("\n Cong hai phan so : ");
	inPhanSo(ps1) ; printf("+"); inPhanSo(ps2); printf("="); inPhanSo(congPhanSo(ps1,ps2));
	printf("\n");
	printf("\n tru hai phan so :" );
	inPhanSo(ps1) ; printf("-"); inPhanSo(ps2); printf("="); inPhanSo(truPhanSo(ps1,ps2));
	printf("\n");
	printf("\n nhan hai phan so :" );
	inPhanSo(ps1) ; printf("*"); inPhanSo(ps2); printf("="); inPhanSo(nhanPhanSo(ps1,ps2));
	printf("\n");
	printf("\n chia hai phan so :" );
	inPhanSo(ps1) ; printf("/"); inPhanSo(ps2); printf("="); inPhanSo(chiaPhanSo(ps1,ps2));
	
}
