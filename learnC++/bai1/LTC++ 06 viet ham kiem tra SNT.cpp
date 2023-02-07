#include<iostream>
#include<math.h>
using namespace std;
int kt_SNT(int n){
	for(int i = 2 ; i<=sqrt(n) ; i++){
		if(n%i==0){
			return 0;
		}
	}
	return 1;
}
int main(){
//	int so;
//	cout<<"Kiem tra so nguyen to"<<"\n";
//	cout<<"Nhap so :";
//	cin>>so;
//	int kt = kt_SNT(so);
//	if(kt){
//		cout<<"la so nguyen to ";
//	}else{
//		cout<<"khong phai la so nguyen to";
//	}
	cout<<"liet ke cac so nguyen to tu 1 den 100"<<endl;
	for(int j = 2 ; j<=100 ; j++){
		
		int kt = kt_SNT(j);
		if(kt){
			cout<<j<<" ";
		}
	}
	return 0 ;
}
