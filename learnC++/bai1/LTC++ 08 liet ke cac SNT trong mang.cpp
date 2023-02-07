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
int kt_SNT(int x){
	int dem =0 ; 
	for(int i = 1 ; i<=x ; i++){
		if(x%i==0){
			dem++; 
		}
	}
	if(dem==2){
		return 1;
	}else{
		return 0;
	}
}
void xuatSNT(int a[] , int n){
	cout<<"\nCac SNT co trong mang :\n";	
	for(int i = 0 ; i <n ; i++){
		if(kt_SNT(a[i])==1){
			cout<<a[i]<<"\t";
		}
	}
}
int main(){
	int a[100];
	int n ; 
	
	NhapMang(a,n);
	Xuat(a,n);
	
	xuatSNT(a,n);
	
	return 0;
}
