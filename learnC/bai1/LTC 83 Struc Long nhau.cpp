#include<stdio.h>
// doi voi cac loai hinh
struct point{
	float x;
	float y;
}

struct tamgic{
	point a, b,c;
};

struct hinhtron{
	point c;
	float r;
};
struct chunhat{
	point a, b, c, d;
	float d , r ;
};

struct da_giac{
	point[100] ps;
	int n ; 
};
struct da_giac2{
	point *ps;
};
// ngay sinh long con nguoi
struct person{
	char name[100];
	struct date{
		int date ; 
		int month ;
		int year ;
	} date_ngaysinh;
	float weigth ;
};

// nen dem ra ngoai de su dung dc nhieu lan
struct person1{
	char name[100];
	date dateOfbrith;
	float weigth;
};
struct date1{
	int ngay ;
	int thang ;
	int nam ;
};
