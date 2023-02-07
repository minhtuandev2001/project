#include<iostream>
using namespace std;
int main(){
	int a[100];
	
	int n ;
	cout<<"Nhap so luong phan tu ";
	cin>>n;
	for(int i = 0 ; i< n ; i++){
		cin>>a[i];
	}
	cout<<"In mang \n";
	for(int i = 0 ; i < n ; i++){
		cout<<a[i]<<" ";
	}
}
