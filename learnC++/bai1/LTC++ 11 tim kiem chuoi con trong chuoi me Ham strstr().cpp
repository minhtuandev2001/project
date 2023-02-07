#include<iostream>
#include<cstring>
using namespace std;
int timKiem(char a[] , char b[]){
	size_t len1 = strlen(a);
	size_t len2 = strlen(b);
	
	if(len1<len2){
		return 0;
	}else{
		for(int i = 0 ; i<len1;i++){
			if(a[i]==b[0]){
				for(int j = i ; j<len2;j++){
					if(a[j]!=b[j]){
						return 0;
					}
				}
				return 1;
			}
		}
	}
}
int main(){
	char s[100];
	
	cout<<"nhap chuoi :";
	gets(s);
	
	cout<<"chuoi vua nhap \n";
	cout<<s<<endl;
	
	cout<<"nhap chuoi con can tim : ";
	char s1[100];
	gets(s1);
	
	int kt =timKiem(s,s1);
	if(kt){
		cout<<"tim thay";
	}else{
		cout<<"khong tim thay";
	}
	
	return 0;
}
