#include<iostream>
#include<math.h>
using namespace std;
void NhapMang(int a[] , int &n){
	cout<<" Nhap so luong phan tu ";
	cin>>n;
	
	for(int i = 0 ; i < n ; i++){
		cout<<"a["<<i<<"] =";
		cin>>a[i];
	}
}
void Xuat(int a[] , int n){
	cout<<"\nIn mang\n";
	for(int i = 0 ; i<n ; i++){
		cout<<a[i]<<"\t";
	}
}
int max(int a[] , int n){
	int max = a[0];
	for(int i = 0 ; i < n ; i++){
		if(a[i]>max){
			max = a[i];
		}
	}
	return max ;
} 

int main(){
	int a[100];
	int n ; 
	
	NhapMang(a,n);
	Xuat(a,n);
	cout<<endl;
	cout<< max(a,n);
	
	return 0;
}
