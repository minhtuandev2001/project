#include<iostream>
using namespace std;

int Sum(int a , int b){
	return a+b ;
}
int main(){
	int a , b;
	int c = 5;
	cout<<"nhap vao a :";
	cin>>a;
	cout<<"nhap vao b :";
	cin>>b;
	cout<<"tong cua a va b = ";
	
	int kq =  Sum(a,b) ;
	cout<<kq<<endl;
	
						// tong (a+b) va c ;
	cout<<Sum(a,b)+c ; 
	return 0;  
} 


