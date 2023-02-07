#include<iostream>
using namespace std;

int TinhTong(int x, int y)
{
	return  x+y;
}
int main(){
	int a , b;
	cout<<"Tinh tong hai so a va b :" <<endl;
	cout<<"Nhap A : ";
	cin>>a;
	cout<<"\n";
	cout<<"Nhap B: ";
	cin>>b;
	
	cout<<"tong a+ b ="<<TinhTong(a,b);
	
	return 0;
}
