#include<iostream>
using namespace std;
int main(){
	char mang[50];
	
	cout<<"ten ban la gi :";
	cin.getline(mang,50);
	cout<<"Chao ban : " << mang <<" nha !\n";
	cout<<"ban thich mon the thao nao :";
	cin.getline(mang,100);
	cout<<mang<<" rat thu vi do ...\n";
	
	return 0;
}
