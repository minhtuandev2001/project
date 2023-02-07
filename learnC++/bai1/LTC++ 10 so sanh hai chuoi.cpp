#include<iostream>
#include<cstring>
using namespace std;
int my_strcmp(char s1[] , char s2[]){
	size_t len1 = strlen(s1);
	size_t len2 = strlen(s2);
	
	int min = len1<len2?len1:len2;
	for(int i = 0 ; i< min ; i++){
		if(s1[i]>s2[i]){
			return 1;
		}
		if(s1[i]<s2[i]){
			return -1;
		}
		if(s1[i]==s2[i]){
			return 0 ;
		}
	}
}
int main(){
	char s1[100];
	char s2[100];
	
	
	cout<<"Nhap chuoi s1 :";
	gets(s1);
	cout<<"Nhap  chuoi s2 :";
	gets(s2);
	
	cout<<"chuoi 1 : "<<s1;
	cout<<"\n";
	cout<<"chuoi 2 : "<<s2;
	
	cout<<"\n";
	cout<<"so sanh chuoi 1 voi chuoi 2 vlaue = ";
	cout<<strcmp(s1,s2);
	
	cout<<"\n";
	cout<<"so sanh chuoi s1 va s2 bang my_strcmp value : ";
	cout<<my_strcmp(s1,s2);
}
