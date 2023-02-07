#include<iostream>
#include<cstdio>
#include<cstring>
using namespace std;
void xoaXuongDong(char a[]){
	size_t len = strlen(a);
	if(a[len-1]=='\n'){
		a[len-1]='\0';
	}
}
int main(){
	char hoten[100];
	cout<<"Nhap Ho Ten :"<<endl;
//	gets(hoten); // su dung gets thi khong can ham xoaXuongDong
	fgets(hoten , sizeof(hoten) , stdin);
	xoaXuongDong(hoten);	
	//cin>>hoten; // khong dung vi khong nhap dc dau cach(khoang trang)
	
	// loi ko nhap dc do cin>> thua dau enter
	int tuoi;
	cout<<"nhap tuoi :\n";
	cin>>tuoi;
	fflush(stdin);
	// khac phuc thua dau enter => fflush(stdin) doi voi c++ , getchar() doi voi c
	
	char dia_chi[50];
	cout<<"Nhap dia chi : \n";
	fgets(dia_chi , sizeof(dia_chi) , stdin);
	
	
	cout<<"ho ten : "<<hoten<<"\n";
	cout<<"tuoi : "<<tuoi<<"\n";
	cout<<"dia chi :"<<"\n"<<dia_chi;
	
}
